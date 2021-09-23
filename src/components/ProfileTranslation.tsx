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

    async function GetTranslations() {
        if(loggedIn.loggedIn) {
            const result = await GetUser(user.username); 
            setTranslations(result.translations.slice(-10));
        }
        else {
            history.push("/");
        }
    }

    async function ResetTranslations() {
        user.setTranslations([]);
        setTranslations([]);
        await PatchTranslations(user.id, []);
    }


    return (
        <>
        <h3 className="lolxd">Your last translations</h3>
            <ol>
                {translations.map((translations, i) => <li key={i}>{ translations }</li>)}
            </ol>
            <button className="btn btn-info" onClick={ ResetTranslations }>Reset translations</button>
        </>
    )
}

export default ProfileTranslation;