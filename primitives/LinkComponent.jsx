import { HStack, Link } from '@chakra-ui/react';
import { BiLinkExternal } from 'react-icons/bi';

export default function LinkComponent({ url, text }) {
    return (
        <HStack>
            <Link href={url} isExternal>
                {text}
            </Link>
            <BiLinkExternal />
        </HStack>
    );
}
