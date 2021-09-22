import { useState } from 'react';
import { CheckUser, PostUser } from '../api/userApi';
function Input() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState({
        id : 0,
        username : '',
        translations : []
    }); 
    
    const handleUsername = (event: React.FormEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value)
    }

    async function checkUser() {
        const userFromDB = await CheckUser(username);
        if(userFromDB !== null) {
            setUser({
                ...user,
                id : userFromDB.id,
                username : userFromDB.username,
                translations : userFromDB.translations
            });
        } else {
            const newUser = await PostUser(username);
            setUser({
                ...user,
                id : newUser.id,
                username : newUser.username,
                translations : []
            });
        }
    }

    return (
    <div className="input-group mb-3 w-100">
        <input type="text" className="form-control" 
            aria-label="" aria-describedby="basic-addon" 
            placeholder="What's your name?" 
            value={username} onChange={ handleUsername }/>
        <div className="input-group-append">
            <button className="btn btn-primary" type="button" onClick={ checkUser }>Go</button>
        </div>
    </div>
    )
}

export default Input;