import React, { useEffect, useState } from "react";
import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { PageHeader } from "./components/page-header";
import { GroupTitle } from "./components/group-title";
import { Filters } from "./components/filters";
import { Repo } from "./components/repo";
import moment from "moment";

const Feed = () => {
    const [viewType, setViewType] = useState('grid');
    const [dateJump, setDateJump] = useState('day');
    const [language, setLanguage] = useState();

    
    // to define date range for groups

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(moment().subtract(1,'day').format())

    // fetch repos based on datejump
    useEffect(() => {
        const endDate = moment().subtract(1, 'day').format();

        // as example following will subtract 1 year from yesterday
        const startDate = moment(endDate).subtract(1, dateJump).format();

        setStartDate(startDate);
        setEndDate(endDate);
    }, [dateJump])
    

    return (
        <Box maxWidth='1200px' mx='auto' >
            <PageHeader />
            <Flex alignItems='center' justifyContent='space-between'>
                <GroupTitle />
                <Filters
                    viewType={viewType}
                    onViewChangeCallback={setViewType}
                    dateJump={dateJump}
                    onDateJumpChange={setDateJump}
                    language={language}
                    onLanguageChange={setLanguage}
                />
            </Flex>

            <SimpleGrid columns={viewType === 'list' ? 1 : 3} spacing='20px'>
                <Repo isListViewSet={viewType === 'list'}/>
                <Repo isListViewSet={viewType === 'list'}/>
                <Repo isListViewSet={viewType === 'list'}/>
                <Repo isListViewSet={viewType === 'list'}/>
                <Repo isListViewSet={viewType === 'list'}/>
                <Repo isListViewSet={viewType === 'list'}/>
                <Repo isListViewSet={viewType === 'list'}/>
                <Repo isListViewSet={viewType === 'list'}/>
                <Repo isListViewSet={viewType === 'list'}/>
                <Repo isListViewSet={viewType === 'list'}/>
                <Repo isListViewSet={viewType === 'list'}/>
                <Repo isListViewSet={viewType === 'list'}/>
                <Repo isListViewSet={viewType === 'list'}/>
                <Repo isListViewSet={viewType === 'list'}/>
            </SimpleGrid>

            <Flex alignItems='center' justifyContent='center' my='20px'>
                <Button colorScheme='blue' variant='solid'>Load Next Group</Button>
            </Flex>
        </Box>
    );
}

export { Feed };
