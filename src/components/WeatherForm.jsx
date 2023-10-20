import React, { useState } from "react";

const WeatherForm = ({selectCity}) => {
    
    const [cityName, setCityName] = useState('')


    const handleCitySubmit = (event) => {
        event.preventDefault()
        selectCity(cityName)
        setCityName('')
    }

    const handleInputChange = (event) => {
        setCityName(event.target.value)
    }

    return (  
        <>
            <form onSubmit={handleCitySubmit}>
                <input type="text" placeholder="City name" value={cityName} onChange={handleInputChange}/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default WeatherForm;