import { createContext, useContext, useEffect, useState } from 'react';

const ModalContext = createContext();

function ModalProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
}

function useModal(initalModalState) {
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

    useEffect(() => {
        if (initalModalState) {
            setIsModalOpen(initalModalState);
        }
    }, []);

    return { isModalOpen, setIsModalOpen };
}

export { ModalProvider, useModal };
