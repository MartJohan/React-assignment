import { createContext, useState, useContext } from "react";

const UserContext = createContext<UserContextType>({
    username: "", 
    setUsername: username => null,
    id: 0, 
    setId: id => null,
    translations: [],
    setTranslations: translations => null
});

export type UserContextType = {
    username: string,
    setUsername: (user: string) => void,
    id: number,
    setId: (id: number) => void,
    translations: string[],
    setTranslations: (translations: string[]) => void
}

export const useUser = () => {
    return useContext(UserContext);
}

const UserProvider = ({ children }: any) => {

    const [username, setUsername] = useState("");
    const [id, setId] = useState(0);
    const [translations, setTranslations] = useState([""])
    
    return(
        <UserContext.Provider value={{username, setUsername, id, setId, translations, setTranslations}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;