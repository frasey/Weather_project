import {useState} from 'react'
import styled from 'styled-components'

const Button = styled.button`
    position: sticky;
    left: 13%;
    width: 80px;
    height: 40px;
    border: 3px;
    border-color: #2f3e46;
    border-style: solid;
    border-radius: 10px;
    background-color: #52796f;
    color: #2f3e46;
    box-shadow: 4px 4px #354f52;
    font-weight: bold;
    &:hover,
    &:focus {
        color: #f5f5f5;
    }
    &:active {
        color: #354f52;
    }
`

const KeyText = styled.p`
    color: #2f3e46;
`

const Key = styled.div`
    padding: 10px;
    position: sticky;
    border: 1px solid #2f3e46;
    border-radius: 10px;
    box-shadow: 4px 4px #354f52;
    width: 705px;
    height: 40px;
    top: 5%; 
    left: 26%;
`

const KeyDisplay = () => {

    const [showDetails, setShowDetails] = useState(false)
    
    const toggleKey = () => {
        setShowDetails(!showDetails)
    }

    return ( 
        <>
            <Button onClick={toggleKey}>KEY</Button>
            {showDetails && (
                <Key>
                    <KeyText>
                        ☂️ Don't leave without your umbrella.  🐧 Snow predicted!  🧣 It's going to be cold, wrap up warm. </KeyText>
                    <KeyText>
                        🧥 It's chilly, wear a coat.  🦺 You'll need a light jacket today  👕 It's sunny, pack your sunglasses!
                    </KeyText>
                </Key>
            )}
        </>
);
}

export default KeyDisplay;

