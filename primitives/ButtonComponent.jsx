import { Button } from '@chakra-ui/react';
import { useModal } from 'contexts/modal-context';

export default function ButtonComponent({ text, doesOpenModal }) {
    const { setIsModalOpen } = useModal();

    const onButtonClick = () => {
        if (doesOpenModal) {
            setIsModalOpen(true);
            console.log('Modal Opened!');
            return;
        }
        console.log('Button Clicked!');
    };

    return (
        <Button colorScheme="green" onClick={onButtonClick}>
            {text}
        </Button>
    );
}
