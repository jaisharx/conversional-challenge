import { ChakraProvider } from '@chakra-ui/react';
import { ModalProvider } from 'contexts/modal-context';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <ModalProvider>
                <Component {...pageProps} />
            </ModalProvider>
        </ChakraProvider>
    );
}

export default MyApp;
