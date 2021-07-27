import { Box, HStack, Select } from '@chakra-ui/react';
import ReactJSIcon from './icons/reactjs';

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
                <ReactJSIcon />
            </Box>
            <Select
                w="40"
                value={selectedExample}
                onChange={(e) => setSelectedExample(e.target.value)}
            >
                <option value="Example1">Example 1</option>
                <option value="Example2">Example 2</option>
                <option value="Example3">Example 3</option>
            </Select>
        </HStack>
    );
}
