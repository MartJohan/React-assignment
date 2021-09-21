import {useState} from 'react';
function TranslationInput(props: any) {
    const [inputText, setInputText] = useState("");
    
    const handleInputText = (event: React.FormEvent<HTMLInputElement>) => {
        setInputText(event.currentTarget.value);
    }

    const handleTranslate = (event: any) => {
        event.preventDefault();
        props.inputClick(inputText);
    }


    return (
    <div >
        <form onSubmit={handleTranslate}>
            <div className="input-group mb-3 w-100">
                <input type="text" id="translationInput" className="form-control" 
                    aria-label="" aria-describedby="basic-addon" 
                    placeholder="Input text to translate"
                    value={inputText} onChange={handleInputText}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit" >Translate</button>
                </div>
            </div>
        </form>
    </div>
    )
}

export default TranslationInput;