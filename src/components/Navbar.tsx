import { LoggedInContextType,useLoggedIn } from "../context/LoggedInContext";
import { useHistory } from 'react-router';



function Navbar() {
    const loggedIn: LoggedInContextType = useLoggedIn();
    const history = useHistory();

    const handleClickTranslation = () => {
        history.push("/translation")
    }

    const handleClickProfile = () => {
        history.push("/profile")
    }

    const handleClickLogOut = () => {
        loggedIn.setLoggedIn(false);
        history.push("/");
    }

    return(
            <div>
            { (loggedIn.loggedIn) ?  (
                        <nav className="navbar navbar-expand-lg bg-light">
                            <div className="navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <span className="nav-link rounded" onClick={ handleClickTranslation }>Translate</span>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link rounded" onClick={ handleClickProfile }>Profile</span>
                                    </li>
                                        <li className="nav-item justify-self-end">
                                            <span className="nav-link rounded" onClick={ handleClickLogOut }>Log out</span>
                                        </li>
                                </ul>
                            </div>
                        </nav>
            ) : 
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item invisible">
                            <span className="nav-link rounded" >Translate</span>
                        </li>
                        <li className="nav-item invisible">
                            <span className="nav-link rounded" >Profile</span>
                        </li>
                            <li className="nav-item justify-self-end invisible">
                                <span className="nav-link rounded" >Log out</span>
                            </li>
                    </ul>
                </div>
            </nav> } <br/>
        </div>
    )
}

export default Navbar;