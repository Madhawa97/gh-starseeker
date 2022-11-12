import { Select, Menu, MenuButton, MenuItem, MenuList, Button, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FaList, FaTable } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import languages from '../data/languages.json';

export const Filters = (props) => {
    const { onViewChangeCallback } = props;
    const [viewType, setViewType] = useState('grid');

    useEffect(() => {
        onViewChangeCallback(viewType);
    }, [viewType])


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
                    <MenuItem>Daily</MenuItem>
                    <MenuItem>Weekly</MenuItem>
                    <MenuItem>Monthly</MenuItem>
                    <MenuItem>Yearly</MenuItem>
                </MenuList>
            </Menu>
            <Stack isInline spacing={0} borderWidth={'1px'} rounded='5px' alignItems={'center'} >
                <Button onClick={() => setViewType('grid')} bg={viewType === 'grid' ? 'gray.100' : 'white' } leftIcon={<FaTable />} roundedRight={0}></Button>
                <Button onClick={() => setViewType('list')} bg={viewType === 'list' ? 'gray.100' : 'white' } leftIcon={<FaList />} roundedLeft={0}></Button>
            </Stack>
        </Stack>
    );
}

