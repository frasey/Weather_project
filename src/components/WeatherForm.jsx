import React, { useState } from "react"
import SearchBar from "./SearchBar"
import styled from 'styled-components'

const CitySearch = styled.div`
    text-align: center;
    padding-top: 30px;
`
const DropDown = styled.select`
    height: 40px;
    font-weight: bold;
    background-color: #f5f5f5;
    color: #2f3e46;
`

const Submit = styled.button`
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
    padding: 0 10px;
    &:hover,
    &:focus {
        color: #f5f5f5;
    }
    &:active {
        color: #354f52;
    }
    
`

const WeatherForm = ({selectCity, selectDays}) => {
    
    const [cityName, setCityName] = useState('')
    const [prevCity, setPrevCity] = useState('')
    const [days, setDays] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (cityName) {
            selectCity(cityName)
            setPrevCity(cityName)
        } else if (prevCity !== '') {
            selectCity(prevCity)
        } else {
            selectCity("Edinburgh")
        }
        selectDays(Number(days))
        setCityName('')
        setDays(0)
    }

    const handleSelectDaysChange = (event) => {
        setDays(event.target.value)
        console.log("days", days)
    }

    const dayOptions = []
    for(let i=1; i<=10; i++){
        dayOptions.push(i)
    }
    console.log("days available", dayOptions)

    return (  
        <CitySearch>
            <form onSubmit={handleSubmit}>
                <SearchBar cityName={cityName} setCityName={setCityName}/>
                <DropDown value={days} onChange={handleSelectDaysChange}>
                    <option value={''}>Select days</option>
                    {dayOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </DropDown>
                <Submit type="submit">Submit</Submit>
            </form>
        </CitySearch>
    );
}

export default WeatherForm;