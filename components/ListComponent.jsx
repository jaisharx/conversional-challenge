import { UnorderedList, ListItem } from '@chakra-ui/react';

export default function ListComponent({ li }) {
    return (
        <UnorderedList>
            {li.map((text) => (
                <ListItem>{text}</ListItem>
            ))}
        </UnorderedList>
    );
}
