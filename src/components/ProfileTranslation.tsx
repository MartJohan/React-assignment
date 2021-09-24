import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GetUser, PatchTranslations } from "../api/userApi";
import { useUser, UserContextType } from '../context/UserContext';
import { LoggedInContextType, useLoggedIn } from "../context/LoggedInContext";

function ProfileTranslation() {
    const [translations, setTranslations] = useState([]);
    const user: UserContextType = useUser();
    const loggedIn: LoggedInContextType = useLoggedIn();
    const history = useHistory();
    

    useEffect(() => {
        if(!loggedIn.loggedIn) {
            history.push("/");

        }
        GetTranslations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history, loggedIn])

    //Gets the 10 most recent translations
    async function GetTranslations() {
        if(loggedIn.loggedIn) {
            const result = await GetUser(user.username); 
            setTranslations(result.translations.slice(-10));
        }
        else {
            history.push("/");
        }
    }

    //Reset all current translations
    async function ResetTranslations() {
        user.setTranslations([]);
        setTranslations([]);
        await PatchTranslations(user.id, []);
    }


    return (
        <>
        <h3>Your last translations</h3> <br/>
            <div className="row">
                {translations.map((translations, i) => <div className="col-md-8 mx-auto" key={i}>
                    <div className="translation-item mx-auto">
                        { translations }
                    </div> <br/>
                </div>)}
            </div>
            <button className="btn btn-info" onClick={ ResetTranslations }>Reset translations</button>
        </>
    )
}

export default ProfileTranslation;