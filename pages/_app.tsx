import { ChakraProvider } from '@chakra-ui/react';
import { ModalProvider } from 'contexts/modal-context';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <ModalProvider>
                <Component {...pageProps} />
            </ModalProvider>
        </ChakraProvider>
    );
}

export default MyApp;
