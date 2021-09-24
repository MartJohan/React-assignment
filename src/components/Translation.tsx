import {useState, useEffect } from 'react';
import TranslationInput from './TranslationInput';
import Sign from './Sign';
import { useHistory } from 'react-router';
import { useUser, UserContextType } from '../context/UserContext';
import { useLoggedIn, LoggedInContextType} from '../context/LoggedInContext';
import { PatchTranslations } from '../api/userApi';

function Translation() {
    const [signs, setSigns] = useState([""])
    const user: UserContextType = useUser();
    const loggedIn: LoggedInContextType = useLoggedIn();
    const history = useHistory();

    useEffect(() => {
        if(!loggedIn.loggedIn) {
            history.push("/");
        }
    }, [history, loggedIn])

    const handleInputTextChange = async (inputFromChild: string) => {
        const translation: string[] = setSignsFromString(inputFromChild)
        setSigns(translation);
        const userTranslationsArray = user.translations;
        userTranslationsArray.push(inputFromChild)
        user.setTranslations(userTranslationsArray)
        await PatchTranslations(user.id, userTranslationsArray)
    }

    const setSignsFromString = (translation: string) => {
        const translationArray: string[] = translation.split('');
        return translationArray;

    }

    return (
        <div className="container">
            <div className="mb-4">
                <h3>Welcome {user.username}!</h3>
            </div>
            <div className="mb-4">
                <img src="Logo.png" width="300" alt="hello logo"/>
            </div>
            <TranslationInput inputClick={handleInputTextChange}/>
            <div className="translation rounded">
                <ul className="row">
                    {signs.map((element, index) => {
                        return <Sign letter={element} key={index}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Translation;