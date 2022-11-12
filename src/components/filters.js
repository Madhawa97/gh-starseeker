import { Box, Flex, Select } from "@chakra-ui/react";
import React from "react";
import languages from '../data/languages.json'

export const Filters = () => {
    return (
        <Flex >
            <Select>
                {languages.map( (language) => (
                    <option value={language.value}>{language.label}</option>
                ))}
            </Select>
        </Flex>
    );
}

