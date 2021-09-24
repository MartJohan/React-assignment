import LoginInput from './LoginInput';

function Login() {
    return (
        <div>
            <div className="mb-4">
                <h1>Lost in Translation</h1>
                
            </div>
            <div className="mb-4">
                <img src="Logo-hello.png" width="300" alt="hello logo"/>
            </div>
            <div className="mb-4" >
                <h3>Let's get started</h3>
            </div>
            <div className="col-md-8 offset-md-2">
                <LoginInput/>
            </div>

        </div>
    )
}

export default Login;