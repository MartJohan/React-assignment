import { useState } from 'react';
import { useHistory } from 'react-router';
import { GetUser, PostUser } from '../api/userApi';
import { useUser, UserContextType } from '../context/UserContext';
import { useLoggedIn, LoggedInContextType} from '../context/LoggedInContext';
function LoginInput() {
    const user: UserContextType = useUser();
    const [inputText, setInputText] = useState("")
    const loggedIn: LoggedInContextType = useLoggedIn();
    const history = useHistory();
    const handleUsername = (event: React.FormEvent<HTMLInputElement>) => {
        setInputText(event.currentTarget.value);
    }

    async function checkUser(event: any) {
        event.preventDefault();
        const userFromDB = await GetUser(inputText);
        if(userFromDB !== null) {
            user.setUsername(userFromDB.username)
            user.setId(userFromDB.id)
            user.setTranslations(userFromDB.translations)
        } else {
            const newUser: UserContextType = await PostUser(inputText);
            user.setUsername(newUser.username)
            user.setId(newUser.id)
            user.setTranslations(newUser.translations)
        }
        loggedIn.setLoggedIn(true);
        history.push("/translation");
    }

    return (
        <div>
            <form onSubmit={checkUser}>
                <div className="input-group mb-3 w-100">
                    <input type="text" id="usernameInput" className="form-control" 
                        aria-label="" aria-describedby="basic-addon" 
                        placeholder="What's your name?"
                        value={inputText} onChange={handleUsername}/>
                    <div className="input-group-append">
                        <button className="btn btn-info" type="submit" >Log in</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginInput;