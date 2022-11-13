import { Text, Box, Flex, Heading, Image, Stack, Button } from "@chakra-ui/react";
import React from "react";
import { GoStar, GoIssueOpened, GoRepoForked } from "react-icons/go";

export const Repo = (props) => {
    const { isListViewSet = false, repo } = props;

    return (
        <Flex borderWidth={'1px'} p='15px' bg={'white'} rounded={'5px'} alignItems='center'>
            <Flex flex={1} flexDir='column'>
                
                {!isListViewSet && (
                    <Flex mb={'20px'}>
                        <Image src="https://www.w3schools.com/howto/img_avatar.png" width={'40px'} height={'40px'} rounded={'5px'}>
                        </Image>
                        <Box ml={'10px'}>
                            <Heading fontSize={'18px'}>Madhawa97</Heading>
                            <Text fontSize={'14px'}>View Profile</Text>
                        </Box>
                    </Flex>
                )}
                
                <Box mb={'15px'}>
                    <Box mb={'10px'}>
                        {isListViewSet && (
                            <Stack isInline as='a' href="https://github.com/Madhawa97/ssd-life-calc" target={'_blank'} color='purple.700'>
                                <Heading fontSize={'22px'}>Madhawa97 /</Heading>
                                <Heading fontSize={'22px'}>SSD-life-calc</Heading>
                            </Stack>
                        )}
                        {!isListViewSet && (
                            <Heading as='a' href="https://github.com/Madhawa97/ssd-life-calc" target={'_blank'} color='purple.700' fontSize={'22px'}>SSD-life-calc</Heading>
                        )}
                        <Text color={'gray.600'}>Meta info</Text>
                    </Box>
                    <Text color={'gray.800'}>Some repository description</Text>
                </Box>
                <Stack isInline>
                    <Button as={'a'} cursor={'pointer'} leftIcon={<GoStar />} variant='link' iconSpacing={'4px'} fontSize='15px' _hover={{ textDecor: 'none' }}>50</Button>
                    <Button as={'a'} cursor={'pointer'} leftIcon={<GoRepoForked />} variant='link' iconSpacing={'4px'} fontSize='15px' _hover={{ textDecor: 'none' }}>Fork</Button>
                    <Button as={'a'} cursor={'pointer'} leftIcon={<GoIssueOpened />} variant='link' iconSpacing={'4px'} fontSize='15px' _hover={{ textDecor: 'none' }}>Issue</Button>
                </Stack>
            </Flex>
            {isListViewSet && <Image src="https://www.w3schools.com/howto/img_avatar.png" width={'130px'} height={'130px'} rounded={'100%'}>
            </Image>}
        </Flex>
    );
}

