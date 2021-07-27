import { HStack, Link } from '@chakra-ui/react';
import { BiLinkExternal } from 'react-icons/bi';
import { useModal } from 'contexts/modal-context';

export default function LinkComponent({ url, text, doesOpenModal }) {
    const { setIsModalOpen } = useModal();

    const onLinkClick = () => {
        if (doesOpenModal) {
            setIsModalOpen(true);
            console.log('Modal Opened!');
        }
    };

    return (
        <HStack>
            <Link href={url} isExternal onClick={onLinkClick}>
                {text}
            </Link>
            <BiLinkExternal />
        </HStack>
    );
}
