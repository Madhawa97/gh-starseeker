import React from 'react';
import { Box } from '@chakra-ui/react';
import { Feed } from './feed';

const App = () => {
    return (
        <Box width='100vw' minHeight={'100vh'} bg='gray.100'>
            <Feed />

        </Box>
    );
}

export { App };
