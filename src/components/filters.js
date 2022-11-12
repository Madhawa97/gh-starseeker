import { Box, Select, Menu, MenuButton, MenuItem, MenuList, Button, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FaList, FaTable } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import languages from '../data/languages.json';

export const Filters = (props) => {
    const { 
        onViewChangeCallback,
        viewType,
        onDateJumpChange,
        dateJump,
        language,
        onLanguageChange
    } = props;


    return (
        <Stack isInline>
            <Select value={language} onChange={(e) => onLanguageChange(e.target.value)}>
                {languages.map( (language) => (
                    <option value={language.value}>{language.label}</option>
                ))}
            </Select>

            <Menu>
                <MenuButton bg='white' borderWidth='1px' fontWeight='400' minWidth='120px' as={Button} leftIcon={<FiCalendar />}>
                    <Box as='span' textTransform={'capitalize'}>{dateJump}</Box>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={()=> onDateJumpChange('day')}>Daily</MenuItem>
                    <MenuItem onClick={()=> onDateJumpChange('week')}>Weekly</MenuItem>
                    <MenuItem onClick={()=> onDateJumpChange('month')}>Monthly</MenuItem>
                    <MenuItem onClick={()=> onDateJumpChange('year')}>Yearly</MenuItem>
                </MenuList>
            </Menu>
            <Stack isInline spacing={0} borderWidth={'1px'} rounded='5px' alignItems={'center'} >
                <Button onClick={() => onViewChangeCallback('grid')} bg={viewType === 'grid' ? 'gray.100' : 'white' } leftIcon={<FaTable />} roundedRight={0}></Button>
                <Button onClick={() => onViewChangeCallback('list')} bg={viewType === 'list' ? 'gray.100' : 'white' } leftIcon={<FaList />} roundedLeft={0}></Button>
            </Stack>
        </Stack>
    );
}

