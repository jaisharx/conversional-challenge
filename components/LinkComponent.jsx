import { Link } from '@chakra-ui/react';

export default function LinkComponent({ url, text }) {
    return <Link href={url} isExternal>{text}</Link>;
}
