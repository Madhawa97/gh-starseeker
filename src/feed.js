import React from "react";
import { Box, Image, Button, Flex, Stack, Text, Heading } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from 'react-icons/fa'

const Feed = () => {
    return (
        <Box maxWidth='1200px' mx='auto' >
            <Flex justifyContent='space-between' alignItems='center' pt='15px'>
                <Flex alignItems='center'>
                    <Image maxWidth='100px' src="./assets/logo.png" ml='1' my='2'></Image>
                    <Box ml='3'>
                        <Heading fontSize='24px'>StarSeeker</Heading>
                        <Text color='gray.600'>Find most starred repos on Github</Text>
                    </Box>
                </Flex>
                <Stack isInline>
                    <Button leftIcon={<FaGithub/>} colorScheme='green' variant='outline'>View Source</Button>
                    <Button leftIcon={<FaTwitter/>} colorScheme='blue' variant='outline' ml='10px'>Tweet</Button>
                </Stack>
            </Flex>
        </Box>
    );
}

export { Feed };
