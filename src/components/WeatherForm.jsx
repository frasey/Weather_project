import React, { useState } from "react"
import SearchBar from "./SearchBar"

const WeatherForm = ({selectCity, selectDays}) => {
    
    const [cityName, setCityName] = useState('')
    const [days, setDays] = useState(0)


    const handleSubmit = (event) => {
        event.preventDefault()
        selectCity(cityName)
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
        <>
            <form onSubmit={handleSubmit}>
                <SearchBar cityName={cityName} setCityName={setCityName}/>
                <select value={days} onChange={handleSelectDaysChange}>
                    <option value={''}>Select days</option>
                    {dayOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default WeatherForm;