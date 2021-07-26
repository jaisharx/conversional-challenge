import { Box, Button, Center, Heading, useDisclosure } from '@chakra-ui/react';
import ModalComponent from 'components/ModalComponent';
import BoxComponent from 'components/BoxComponent';
import ButtonComponent from 'components/ButtonComponent';
import H1Component from 'components/H1Component';
import H2Component from 'components/H2Component';
import LinkComponent from 'components/LinkComponent';
import ListComponent from 'components/ListComponent';
import ParagraphComponent from 'components/ParagraphComponent';

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
