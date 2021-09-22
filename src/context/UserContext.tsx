import { createContext, useState, useContext } from "react";

const UserContext = createContext<UserContextType>({user: "", setUser: user => null});

type UserContextType = {
    user: string,
    setUser: (user: string) => void
}

export const useUser = () => {
    return useContext(UserContext);
}

const UserProvider = ({ children }: any) => {

    const [user, setUser] = useState("");
    
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;