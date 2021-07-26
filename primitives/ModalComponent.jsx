import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

export default function ModalComponent({ isOpen }) {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    return (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <LoremIpsum p={1} />
                </ModalBody>

                <ModalFooter>
                    <Button
                        mr={3}
                        colorScheme="blue"
                        onClick={() => setIsModalOpen(false)}
                    >
                        Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
