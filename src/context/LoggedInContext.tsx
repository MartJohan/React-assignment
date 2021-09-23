import { createContext, useContext, useState } from "react";

const LoggedInContext = createContext<LoggedInContextType>({loggedIn: false, setLoggedIn: loggedIn => null});

export type LoggedInContextType = {
    loggedIn: boolean,
    setLoggedIn: (loggedIn: boolean) => void
}

export const useLoggedIn = () => {
    return useContext(LoggedInContext);
}

const LoggedInProvider = ({children}: any) => {

    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <LoggedInContext.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </LoggedInContext.Provider>
    )
}
export default LoggedInProvider;