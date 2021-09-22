import TranslationProvider from "./TranslationContext";
import UserProvider from "./UserContext";

const AppContext = ({children}: any) => {
    return (
        <UserProvider>
            <TranslationProvider>
                {children}
            </TranslationProvider>
        </UserProvider>
    )
}

export default AppContext;