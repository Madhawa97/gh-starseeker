import { Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";

export const GroupTitle = (props) => {
    const { startDate, endDate } = props;
    if (!startDate || !endDate){
        return null;
    }

    const start = moment(startDate);
    const end = moment(endDate);

    return (
        <Text fontSize='24px' fontWeight='700'>
            {start.fromNow()} 
            <Text fontSize='15px' fontWeight={500} color='gray.500' as='span' ml='10px'>{start.format("MMMM D, YYYY")} - {end.format("MMMM D, YYYY")}</Text>
        </Text>
    );
}
