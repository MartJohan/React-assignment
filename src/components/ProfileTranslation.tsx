import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GetUser, PatchTranslations } from "../api/userApi";

function ProfileTranslation() {
     const [translations, setTranslations] = useState([]);
     const [user, setUser] = useState({
        id : 0,
        username : '',
        translations : []
    }); 
    const history = useHistory();

    useEffect(() => {
        GetTranslations();
    }, [])

    async function GetTranslations() {
        const result = await GetUser("Tester"); 
        setTranslations(result.translations.slice(-10));
    }

    async function ResetTranslations() {
        const updatedUser = await PatchTranslations(5, []);
        setTranslations([]);
        setUser({
            ...user,
            id : updatedUser.id,
            username : updatedUser.username,
            translations : []
        });
    }

    async function LogOut() {
        localStorage.setItem("LoggedIn", "0");  
        history.push("/");
    }

    return (
        <>
            <ol>
                {translations.map((translations, i) => <li key={i}>{ translations }</li>)}
            </ol>
            <button className="btn btn-primary" onClick={ ResetTranslations }>Reset translations</button>
            <button className="btn btn-danger" onClick={ LogOut }>Log out</button>
        </>
    )
}

export default ProfileTranslation;