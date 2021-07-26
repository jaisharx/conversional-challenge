import { Heading } from '@chakra-ui/react';

export default function H1Component({ text }) {
    return <Heading as="h1" fontSize="5xl">{text}</Heading>;
}
