import {useState} from 'react';
import Input from './LoginInput';
import Sign from './Sign';

function Translation() {
    // list of chars to be translated
    const [signs, setSigns] = useState([""])
    
    // CHANGE TO USE CONTEXT FROM THE INPUT COMPONENT WHEN WE IMPLEMENT CONTEXT API!!
    // (for now we duplicate state here in parent component)
    const [inputText, setInputText] = useState("");

    const setText = (text: string) => {
        setInputText(text);
    }

    const handleInputTextChange = () => {
        const translation: string[] = setSignsFromString(inputText)
        setSigns(translation);
    }

    const setSignsFromString = (translation: string) => {
        const translationArray: string[] = translation.split('');
        return translationArray;

    }
    // need inputText from Input component
    return (
        <div>
            <Input setText={setText} inputChange={handleInputTextChange}/>
            <div className="row">
                <Sign letter="a" />
                <Sign letter="b" />
                <Sign letter="c" />
            </div>
            {/*signs.forEach(element => {
                <Sign letter={element}/>
            })*/}
        </div>
    )
}

export default Translation;