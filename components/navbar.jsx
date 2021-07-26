import Example1 from 'data/data.json';
import Example2 from 'data/data2.json';

import { Box, HStack, Select } from '@chakra-ui/react';

import NextImage from 'next/image';
import reactImageSrc from 'public/react.png';

export default function Navbar({ selectedExample, setSelectedExample }) {
    return (
        <HStack
            px="4"
            py="2"
            mx="auto"
            boxShadow="md"
            borderRadius="md"
            maxW="container.lg"
            justify="space-between"
        >
            <Box maxW="12">
                <NextImage src={reactImageSrc} />
            </Box>
            <Select
                w="40"
                value={selectedExample}
                onChange={(e) => setSelectedExample(e.target.value)}
            >
                <option value="Example1">Example 1</option>
                <option value="Example2">Example 2</option>
            </Select>
        </HStack>
    );
}
