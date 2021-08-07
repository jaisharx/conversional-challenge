import { Box, Button, Center, Heading, useDisclosure } from '@chakra-ui/react';
import ModalComponent from 'primitives/ModalComponent';
import BoxComponent from 'primitives/BoxComponent';
import ButtonComponent from 'primitives/ButtonComponent';
import H1Component from 'primitives/H1Component';
import H2Component from 'primitives/H2Component';
import LinkComponent from 'primitives/LinkComponent';
import ListComponent from 'primitives/ListComponent';
import ParagraphComponent from 'primitives/ParagraphComponent';

export default function TestPage() {
    return (
        <Box maxW="container.md" mx="auto">
            <BoxComponent borderSize="1px">
                <H1Component text="H1 Heading" />
                <H2Component text="H2 Heading" />
                <ParagraphComponent text="P paragraph" />
                <ListComponent
                    li={['free to use', 'superfast', 'and pretty, too!']}
                />
                <ButtonComponent text="Click me to open the modal" />
                <LinkComponent
                    url="https://lmgtfy.com/"
                    text="I open a link but I should also open the modal."
                />
            </BoxComponent>
        </Box>
    );
}
