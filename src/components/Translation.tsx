import {useState,useEffect } from 'react';
import TranslationInput from './TranslationInput';
import Sign from './Sign';
import { useHistory } from 'react-router';

//import { useTranslation } from '../context/TranslationContext';

function Translation() {
    const history = useHistory();
    useEffect(() => {
        let value = localStorage.getItem("LoggedIn");
        if(value !== "1") {
            history.push("/");
        }
    },[])

    // list of chars to be translated
    const [signs, setSigns] = useState([""])
//    const [translation, setTranslation] = useTranslation([]);


    const handleInputTextChange = (inputFromChild: string) => {
        const translation: string[] = setSignsFromString(inputFromChild)
        setSigns(translation);
    }

    const setSignsFromString = (translation: string) => {
        const translationArray: string[] = translation.split('');
        return translationArray;

    }

    // need inputText from Input component
    return (
        <div className="container">
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