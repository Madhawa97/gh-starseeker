import React from "react";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { Brand } from "./brand";

export const PageHeader = () => {
    return (
        <Flex justifyContent='space-between' alignItems='center' pt='15px'>
            <Brand />
            <Stack isInline>
                <Button leftIcon={<FaGithub />} colorScheme='green' variant='outline' as='a' href='https://github.com/Madhawa97/gh-starseeker' target={'_blank'}>View Source</Button>
                <Button leftIcon={<FaTwitter />} colorScheme='blue' variant='outline' ml='10px' as='a' href="https://twitter.com/intent/tweet?text=https://madhawa97.github.io/gh-starseeker/" target={'_blank'}>Tweet</Button>
            </Stack>
        </Flex>
    );
}
