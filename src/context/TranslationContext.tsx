import { createContext, useContext, useState } from "react";

const TranslationContext = createContext<TranslationContextType>({translation: [], setTranslation: translation => null});

type TranslationContextType = {
    translation: string[],
    setTranslation: (translation: []) => void
}

export const useTranslation = () => {
    return useContext(TranslationContext);
}

const TranslationProvider = ({children}: any) => {

    const [translation, setTranslation] = useState([]);
    return (
        <TranslationContext.Provider value={{translation, setTranslation}}>
            {children}
        </TranslationContext.Provider>
    )
}
export default TranslationProvider;