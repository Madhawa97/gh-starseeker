import React from "react";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { Brand } from "./brand";

export const PageHeader = () => {
    return (
        <Flex justifyContent='space-between' alignItems='center' pt='15px'>
            <Brand />
            <Stack isInline>
                <Button leftIcon={<FaGithub />} colorScheme='green' variant='outline'>View Source</Button>
                <Button leftIcon={<FaTwitter />} colorScheme='blue' variant='outline' ml='10px'>Tweet</Button>
            </Stack>
        </Flex>
    );
}
