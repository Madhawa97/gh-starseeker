import { Select, Menu, MenuButton, MenuItem, MenuList, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { FaList, FaTable } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import languages from '../data/languages.json';

export const Filters = () => {
    return (
        <Stack isInline>
            <Select>
                {languages.map( (language) => (
                    <option value={language.value}>{language.label}</option>
                ))}
            </Select>

            <Menu>
                <MenuButton bg='white' borderWidth='1px' fontWeight='400' minWidth='120px' as={Button} leftIcon={<FiCalendar />}>
                    Monthly
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
            <Stack isInline spacing={0} borderWidth={'1px'} rounded='5px' alignItems={'center'} >
                <Button bg={'white'} leftIcon={<FaTable />} roundedRight={0}></Button>
                <Button bg={'white'} leftIcon={<FaList />} roundedLeft={0}></Button>
            </Stack>
        </Stack>
    );
}

