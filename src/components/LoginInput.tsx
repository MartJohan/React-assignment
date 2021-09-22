import { CheckUser, PostUser } from '../api/userApi';
import { useUser, UserContextType } from '../context/UserContext';
function LoginInput() {
    const user: UserContextType = useUser();
    
    const handleUsername = (event: React.FormEvent<HTMLInputElement>) => {
        user.setUsername(event.currentTarget.value)
    }

    async function checkUser() {
        const userFromDB = await CheckUser(user.username);
        if(userFromDB !== null) {
            user.setUsername(userFromDB.username)
            user.setId(userFromDB.id)
            user.setTranslations(userFromDB.translations)
        } else {
            const newUser: UserContextType = await PostUser(user.username);
            user.setUsername(newUser.username)
            user.setId(newUser.id)
            user.setTranslations(newUser.translations)
        }
    }

    return (
    <div className="input-group mb-3 w-100">
        <input type="text" className="form-control" 
            aria-label="" aria-describedby="basic-addon" 
            placeholder="What's your name?" 
            value={user.username} onChange={ handleUsername }/>
        <div className="input-group-append">
            <button className="btn btn-primary" type="button" onClick={ checkUser }>Go</button>
        </div>
    </div>
    )
}

export default LoginInput;