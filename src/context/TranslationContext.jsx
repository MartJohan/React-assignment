import { createContext, useContext, useState } from "react";

const TranslationContext = createContext(null);

export const useTranslation = () => {
    return useContext(TranslationContext);
}

const TranslationProvider = ({children}) => {

    const [translation, setTranslation] = useState([]);
    return (
        <TranslationContext.Provider value={[translation, setTranslation]}>
            {children}
        </TranslationContext.Provider>
    )
}
export default TranslationProvider;