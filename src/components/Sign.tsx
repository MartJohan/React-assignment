import {useState, useEffect} from 'react'

function Sign(props: any) {
    const [signSource, setSignSource] = useState("");
    
    const setSourceFromLetter = (letter: string) => {
        const signImageSource = "/individual_signs/" + letter + ".png"
        return signImageSource;
    }

    useEffect(() => {
        setSignSource(setSourceFromLetter(props.letter));
    }, [props.letter])

    return (
        <div>
            {(props.letter !== " ") 
            ? (<img src={signSource} alt="letter in hand sign" width="80rem" height="80rem"/>) 
            : (<p className="emptySpace"></p>)}
        </div>
    )
}

export default Sign;