import { Text, Box, Flex, Heading, Image, Stack, Button } from "@chakra-ui/react";
import React from "react";
import { GoStar, GoIssueOpened, GoRepoForked } from "react-icons/go";
import moment from "moment";

export const Repo = (props) => {
    const { isListViewSet = false, repo } = props;

    return (
        <Flex borderWidth={'1px'} p='15px' bg={'white'} rounded={'5px'} alignItems='center'>
            <Flex flex={1} flexDir='column'>
                
                {!isListViewSet && (
                    <Flex mb={'20px'}>
                        <Image src={repo.owner.avatar_url} width={'40px'} height={'40px'} rounded={100}>
                        </Image>
                        <Box ml={'10px'}>
                            <Heading fontSize={'18px'}>{repo.owner.login}</Heading>
                            <Text fontSize={'13px'} as='a' href={repo.owner.html_url} target='_blank'>View Profile</Text>
                        </Box>
                    </Flex>
                )}
                
                <Box mb={'15px'}>
                    <Box mb={'10px'}>
                        {isListViewSet && (
                            <Stack isInline color='purple.700'>
                                <Heading as='a' href={repo.owner.html_url} target={'_blank'} fontSize={'23px'}>{repo.owner.login} /</Heading>
                                <Heading as='a' href={repo.html_url} target={'_blank'} fontSize={'23px'}>{repo.name}</Heading>
                            </Stack>
                        )}
                        {!isListViewSet && (
                            <Heading as='a' href={repo.html_url} target={'_blank'} color='purple.700' fontSize={'22px'}>{repo.name}</Heading>
                        )}
                        <Text color={'gray.600'} fontSize={'15px'}>
                            Created at &middot; {moment(repo.created_at).format("MMMM D, YYYY")}
                        </Text>
                    </Box>
                    <Text color={'gray.800'} fontSize={'15px'}>{repo.description}</Text>
                </Box>
                <Stack isInline>
                    <Button as={'a'} cursor={'pointer'} leftIcon={<GoStar />} variant='link' iconSpacing={'4px'} fontSize='15px' _hover={{ textDecor: 'none' }}>{repo.stargazers_count}</Button>
                    <Button as={'a'} cursor={'pointer'} leftIcon={<GoRepoForked />} variant='link' iconSpacing={'4px'} fontSize='15px' _hover={{ textDecor: 'none' }}>{repo.forks_count}</Button>
                    <Button as={'a'} cursor={'pointer'} leftIcon={<GoIssueOpened />} variant='link' iconSpacing={'4px'} fontSize='15px' _hover={{ textDecor: 'none' }}>{repo.open_issues_count}</Button>
                </Stack>
            </Flex>
            {isListViewSet && <Image src={repo.owner.avatar_url} width={'130px'} height={'130px'} rounded={'100%'}>
            </Image>}
        </Flex>
    );
}

