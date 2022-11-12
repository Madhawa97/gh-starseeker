import React from "react";
import { Box, Image, Flex, Text, Heading } from "@chakra-ui/react";

export const Brand = () => {
    return (
        <Flex alignItems='center'>
            <Image maxWidth='100px' src="./assets/logo.png" ml='1' my='2'></Image>
            <Box ml='3'>
                <Heading fontSize='24px'>StarSeeker</Heading>
                <Text color='gray.600'>Find most starred repos on Github</Text>
            </Box>
        </Flex>
    );
}
