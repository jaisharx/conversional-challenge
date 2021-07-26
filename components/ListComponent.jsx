import { UnorderedList, ListItem } from '@chakra-ui/react';

export default function ListComponent({ li }) {
    return (
        <UnorderedList>
            {li.map((text, idx) => (
                <ListItem key={idx}>{text}</ListItem>
            ))}
        </UnorderedList>
    );
}
