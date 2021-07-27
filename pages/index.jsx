import { Container } from '@chakra-ui/react';
import { useState } from 'react';
import Navbar from 'components/navbar';

import Example1 from 'data/data.json';
import Example2 from 'data/data2.json';
import Example3 from 'data/data3.json';

import ModalComponent from 'primitives/ModalComponent';
import BoxComponent from 'primitives/BoxComponent';
import ButtonComponent from 'primitives/ButtonComponent';
import H1Component from 'primitives/H1Component';
import H2Component from 'primitives/H2Component';
import LinkComponent from 'primitives/LinkComponent';
import ListComponent from 'primitives/ListComponent';
import ParagraphComponent from 'primitives/ParagraphComponent';
import renderReactTreeUsingJsonData from 'utils/renderReactTreeUsingJsonData';

function getExampleDataFromKey(key, allExamples) {
    if (key === 'Example1') return allExamples[0];
    if (key === 'Example2') return allExamples[1];
    if (key === 'Example3') return allExamples[2];
}

export default function HomePage() {
    const [selectedExample, setSelectedExample] = useState('Example1');

    const allComps = [
        ModalComponent,
        BoxComponent,
        ButtonComponent,
        H1Component,
        H2Component,
        LinkComponent,
        ListComponent,
        ParagraphComponent,
    ];

    const allExamples = [Example1, Example2, Example3];

    return (
        <>
            <Navbar
                selectedExample={selectedExample}
                setSelectedExample={setSelectedExample}
            />
            <Container maxW="container.lg" mt="4">
                {renderReactTreeUsingJsonData(
                    getExampleDataFromKey(selectedExample, allExamples),
                    allComps
                )}
            </Container>
        </>
    );
}
