import {useState} from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: 60px;
    height: 40px;
    border: 3px;
    border-color: #2f3e46;
    border-style: solid;
    border-radius: 10px;
    background-color: #52796f;
    color: #2f3e46;
    box-shadow: 4px 4px #354f52;
    font-weight: bold;
`

const KeyText = styled.p`
    color: #2f3e46;
`

const Key = styled.div`
    padding: 25px;
`

const KeyDisplay = () => {

    const [showDetails, setShowDetails] = useState(false)
    
    const toggleKey = () => {
        setShowDetails(!showDetails)
    }

    return ( 
        <>
            <Button onClick={toggleKey}>Key</Button>
            {showDetails && (
                <Key>
                    <KeyText>☂️ Don't leave without your umbrella.</KeyText>
                    <KeyText>🐧 Snow predicted! </KeyText>
                    <KeyText>🧣 It's going to be cold, wrap up warm. </KeyText>
                    <KeyText>🧥 It's chilly, wear a coat. </KeyText>
                    <KeyText>🦺 You'll need a light jacket today </KeyText>
                    <KeyText>👕 It's sunny, pack your sunglasses! </KeyText>
                </Key>
            )}
        </>
);
}

export default KeyDisplay;