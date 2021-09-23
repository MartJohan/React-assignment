import LoggedInProvider from "./LoggedInContext";
import UserProvider from "./UserContext";

const AppContext = ({children}: any) => {
    return (
        <UserProvider>
            <LoggedInProvider>
                {children}
            </LoggedInProvider>
        </UserProvider>
    )
}

export default AppContext;