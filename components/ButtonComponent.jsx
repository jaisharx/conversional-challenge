import { Button } from '@chakra-ui/react';

export default function ButtonComponent({ text }) {
    return (
        <Button
            colorScheme="green"
            onClick={() => console.log('Button Clicked!')}
        >
            {text}
        </Button>
    );
}
