import Example1 from 'data/data.json';
import Example2 from 'data/data2.json';

import ModalComponent from 'components/ModalComponent';
import BoxComponent from 'components/BoxComponent';
import ButtonComponent from 'components/ButtonComponent';
import H1Component from 'components/H1Component';
import H2Component from 'components/H2Component';
import LinkComponent from 'components/LinkComponent';
import ListComponent from 'components/ListComponent';
import ParagraphComponent from 'components/ParagraphComponent';
import traverseData from 'utils/traverseData';
import { Container, Heading, HStack } from '@chakra-ui/react';

export default function HomePage() {
    return (
        <>
            <Container maxW="container.lg">
                {traverseData(Example1, [
                    ModalComponent,
                    BoxComponent,
                    ButtonComponent,
                    H1Component,
                    H2Component,
                    LinkComponent,
                    ListComponent,
                    ParagraphComponent,
                ])}
            </Container>
        </>
    );
}
