import { Box } from '@chakra-ui/react';

export default function BoxComponent({ borderSize, children }) {
    return (
        <Box borderColor="red" borderWidth={borderSize}>
            {children}
        </Box>
    );
}
