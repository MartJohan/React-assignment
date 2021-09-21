import {useState} from 'react';
function TranslationInput() {
    const [inputText, setInputText] = useState("")
    
    const handleInputText = (event: React.FormEvent<HTMLInputElement>) => {
        setInputText(event.currentTarget.value)
    }
    return (
    <div className="input-group mb-3 w-100">
        <input type="text" className="form-control" 
            aria-label="" aria-describedby="basic-addon" 
            placeholder="Input text to translate"
            value={inputText} onChange={handleInputText}/>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Go</button>
        </div>
    </div>
    )
}

export default TranslationInput;