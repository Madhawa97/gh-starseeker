import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

export const PageLoader = () => {
    return (
        <Flex
            position={'fixed'}
            top={0}
            left={0}
            bottom={0}
            right={0}
            bg={'white'}
            alignItems='center'
            justifyContent={'center'}
            zIndex={1}
        >
            <Spinner thickness="3px" color="gray.400"></Spinner>
        </Flex>
    );
    
}
