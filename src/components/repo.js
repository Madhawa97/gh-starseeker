import { Text, Box, Flex, Heading, Image, Stack, Button } from "@chakra-ui/react";
import React from "react";
import { GoStar, GoIssueOpened, GoRepoForked } from "react-icons/go";
import moment from "moment";

export const Repo = (props) => {
    const { isListViewSet = false, repo } = props;

    return (
        <Flex borderWidth={'1px'} p='15px' bg={'white'} rounded={'5px'} position={'relative'}>
            <Flex flex={1} flexDir='column' >
                
                <Flex flexDir={'column'}>
                    {!isListViewSet && (
                        <Flex mb={'10px'} >
                            <Image mt={'6px'} src={repo.owner.avatar_url} width={'40px'} height={'40px'} rounded={100}>
                            </Image>
                            <Box ml={'10px'}>
                                <Text fontWeight='bold' fontSize={'18px'}>{repo.owner.login}</Text>
                                <Text fontSize={'13px'} as='a' href={repo.owner.html_url} target='_blank'>View Profile</Text>
                            </Box>
                        </Flex>
                    )}

                    <Flex mb={'15px'} flexDir={'column'} mt={'5px'}>
                        {isListViewSet && (
                            <Flex color='purple.700' >
                                <Text fontWeight='bold' as='a' href={repo.owner.html_url} target={'_blank'} fontSize={'23px'}>{repo.owner.login} /</Text>
                                <Text fontWeight='bold' maxWidth={'50vw'} as='a' href={repo.html_url} target={'_blank'} fontSize={'23px'}>{repo.name}</Text>
                            </Flex>
                        )}
                        {!isListViewSet && (
                            <Flex>
                                <Text mb={'10px'} as='a' href={repo.html_url} target={'_blank'} color='purple.700' fontSize={'22px'} fontWeight='bold'>{repo.name}</Text>
                            </Flex>
                        )}
                        {isListViewSet && (
                            <Box >
                                <Text mb={'10px'} color={'gray.600'} fontSize={'15px'}>
                                    Created at &middot; {moment(repo.created_at).format("MMMM D, YYYY")}
                                </Text>
                                <Text mb={'30px'} color={'gray.800'} fontSize={'15px'}>{repo.description}</Text>
                            </Box>
                        )}
                        {!isListViewSet && (
                            <Box mb={'25px'}>
                                <Text mb={'10px'} color={'gray.600'} fontSize={'15px'}>
                                    Created at &middot; {moment(repo.created_at).format("MMMM D, YYYY")}
                                </Text>
                                <Text color={'gray.800'} fontSize={'15px'}>{repo.description}</Text>
                            </Box>
                        )}
                    </Flex>
                </Flex>

                <Stack isInline position={'absolute'} bottom='20px'>
                    <Button as={'a'} cursor={'pointer'} leftIcon={<GoStar />} variant='link' iconSpacing={'4px'} fontSize='15px' _hover={{ textDecor: 'none' }}>{repo.stargazers_count}</Button>
                    <Button as={'a'} cursor={'pointer'} leftIcon={<GoRepoForked />} variant='link' iconSpacing={'4px'} fontSize='15px' _hover={{ textDecor: 'none' }}>{repo.forks_count}</Button>
                    <Button as={'a'} cursor={'pointer'} leftIcon={<GoIssueOpened />} variant='link' iconSpacing={'4px'} fontSize='15px' _hover={{ textDecor: 'none' }}>{repo.open_issues_count}</Button>
                </Stack>
            </Flex>
            
            {isListViewSet && <Image src={repo.owner.avatar_url} width={'130px'} height={'130px'} rounded={'100%'} mt={'5px'}>
            </Image>}
        </Flex>
    );
}

