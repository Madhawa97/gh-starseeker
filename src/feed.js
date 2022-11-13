import React, { useEffect, useState } from "react";
import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { PageHeader } from "./components/page-header";
import { GroupTitle } from "./components/group-title";
import { Filters } from "./components/filters";
import { Repo } from "./components/repo";
import moment from "moment";
import useFetch from "use-http";
import { PageLoader } from "./components/page-loader";

const transformFilters = ({ language, startDate, endDate }) => {
    const transformedFilters = {};
    const languageQuery = language ? `language:${language} ` : "";
    const dateQuery = `created:${startDate}..${endDate}`;

    transformedFilters.q = languageQuery + dateQuery;
    transformedFilters.sort = "stars";
    transformedFilters.order = "desc";

    return transformedFilters
}

const Feed = () => {
    // any api call in progress, any error, method to use for fetching data
    const { loading, error, get } = useFetch( 'https://api.github.com')

    const [viewType, setViewType] = useState('grid');
    const [dateJump, setDateJump] = useState('day');
    const [language, setLanguage] = useState();
    
    // to define date range for groups

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(moment().subtract(1,'day').format());


    // load repos from API calls 
    const [repositories, setRepositories] = useState([]);

    // fetch repos based on datejump
    useEffect(() => {
        const endDate = moment().subtract(1, 'day').format();

        // as example following will subtract 1 year from yesterday
        const startDate = moment(endDate).subtract(1, dateJump).format();

        setStartDate(startDate);
        setEndDate(endDate);

        setRepositories([]);
    }, [dateJump, language])
    
    useEffect(() => {
        if(!startDate){
            return
        }

        //transform the filter to the format that github accepts
        const filters = transformFilters({ language, startDate, endDate });

        // get query parameter in a form of string
        const filtersQuery = new URLSearchParams(filters).toString(); 
        
        get(`search/repositories?${filtersQuery}`)
            .then(res => {
                setRepositories([
                    ...repositories,  // existing repo list
                    {                 // another object to put the start and end date (to show title)
                        startDate,
                        endDate,
                        items: res.items
                    }
                ])
            }
        )
    }, [startDate])
    

    return (
        <Box maxWidth='1200px' mx='auto' >
            <PageHeader />

            { repositories.length === 0 && loading && <PageLoader />}

            <Flex alignItems='center' justifyContent='space-between'>
                <GroupTitle 
                    startDate={repositories?.[0]?.startDate} endDate={repositories?.[0]?.endDate}
                />
                <Filters
                    viewType={viewType}
                    onViewChangeCallback={setViewType}
                    dateJump={dateJump}
                    onDateJumpChange={setDateJump}
                    language={language}
                    onLanguageChange={setLanguage}
                />
            </Flex>

            {repositories.map( ( repoGroup, counter)=> {
                return (
                    <Box>
                        {(counter > 0) && (
                            <GroupTitle
                                startDate={repoGroup.startDate}
                                endDate={repoGroup.endDate}
                            />
                        )}
                        <SimpleGrid columns={viewType === 'list' ? 1 : 3} spacing='20px'>
                            {repoGroup.items.map((repo) => <Repo isListViewSet={viewType === 'list'} repo={repo} />)}
                        </SimpleGrid>
                    </Box>
                );
            })}

            <Flex alignItems='center' justifyContent='center' my='20px'>
                <Button 
                    isLoading={loading}   // show if its loading
                    colorScheme='blue' 
                    variant='solid'
                    onClick={ () => {
                        setEndDate(startDate);
                        setStartDate(moment(endDate).subtract(1, dateJump).format());  // to select the previous month. date, year range
                    }}
                >Load Next Group</Button>
            </Flex>
        </Box>
    );
}

export { Feed };
