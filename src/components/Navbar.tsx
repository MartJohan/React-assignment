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

    /*
    <div><button className="form-control btn btn-primary" onClick= { handleClickTranslation }>Translate</button></div>
    <div><button className="form-control btn btn-primary" onClick= { handleClickProfile }>Profile</button></div>
    <div><button className="form-control btn btn-danger">Log out</button></div>

    <div className="col-1"><button className="btn btn-primary" onClick= { handleClickTranslation }>Translate</button></div>
                        <div className="col-1"></div>
                        <div className="col-1"><button className="btn btn-primary" onClick= { handleClickProfile }>Profile</button></div>
                        <div className="col-7"></div>
                        <div className="col-2"><button className="btn btn-danger">Log out</button></div>
    */

    return(
            <div>
            { (loggedIn.loggedIn) ?  (
                        <nav className="navbar navbar-expand-lg bg-light">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <span className="nav-link" onClick={ handleClickTranslation }>Translate</span>
                                    </li>
                                    <li className="nav-item">
                                        <span className="nav-link" onClick={ handleClickProfile }>Profile</span>
                                    </li>
                                        <li className="nav-item justify-self-end">
                                            <span className="nav-link">Log out</span>
                                        </li>
                                </ul>
                            </div>
                        </nav>
            ) : <div></div> } <br/>
        </div>
    )
}

export default Navbar;