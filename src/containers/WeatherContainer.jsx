import React from 'react'
import WeatherForm from "../components/WeatherForm";
import ForecastDisplay from "../components/ForecastDisplay";

const WeatherContainer = ({weather, selectCity, selectDays, accordionDisplayToggle}) => {

    return (
        <>
        <WeatherForm selectCity={selectCity} selectDays={selectDays}/>
        <ForecastDisplay weather={weather} accordionDisplayToggle={accordionDisplayToggle}/>
        </>
    )
}

export default WeatherContainer