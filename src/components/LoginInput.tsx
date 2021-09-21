import {useState} from 'react';
function LoginInput() {
    const [username, setUsername] = useState("")
    
    const handleUsername = (event: React.FormEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value)
    }
    return (
    <div className="input-group mb-3 w-100">
        <input type="text" className="form-control" 
            aria-label="" aria-describedby="basic-addon" 
            placeholder="What's your name?" 
            value={username} onChange={handleUsername}/>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Go</button>
        </div>
    </div>
    )
}

export default LoginInput;