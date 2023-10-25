import React, { useState } from "react"
import SearchBar from "./SearchBar"
import DayAccordion from "./DayDisplay"
import styled from 'styled-components'

const CitySearch = styled.div`
    text-align: center;
    padding-top: 30px;
`
const DropDown = styled.select`
    background-color: #f5f5f5;
    color: #2f3e46;
`

const Submit = styled.button`
    background-color: #f5f5f5;
    color: #2f3e46;
    box-shadow: 2px 2px #cad2c5;
    /* background-color: #52796f;
    color: #2f3e46;
    box-shadow: 2px 2px #354f52; */
    font-weight: bold;
    border-radius: 5px;
    padding: 0 5px;
`

const WeatherForm = ({selectCity, selectDays}) => {
    
    const [cityName, setCityName] = useState('')
    const [days, setDays] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        selectCity(cityName)
        selectDays(Number(days))
        setCityName('')
        setDays(0)
        // accordion toggle in here!
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