import { Text } from "@chakra-ui/react";
import React from "react";

export const GroupTitle = () => {
    return (
        <Text fontSize='24px' fontWeight='700'>
            This week <Text fontSize='15px' fontWeight={500} color='gray.500' as='span' ml='10px'>Nov 13, 2022 - Nov 7, 2022</Text>
        </Text>
    );
}
