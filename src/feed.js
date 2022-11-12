import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { PageHeader } from "./components/page-header";
import { GroupTitle } from "./components/group-title";

const Feed = () => {
    return (
        <Box maxWidth='1200px' mx='auto' >
            <PageHeader />
            <Flex alignItems='center' justifyContent='space-between'>
                <GroupTitle />

            </Flex>
        </Box>
    );
}

export { Feed };
