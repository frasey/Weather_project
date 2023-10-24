import React from 'react'
import WeatherForm from "../components/WeatherForm";
import ForecastDisplay from "../components/ForecastDisplay";
import styled from 'styled-components'

const Title = styled.h1`
        text-align: center;
    `

const WeatherContainer = ({weather, selectCity, selectDays, accordionDisplayToggle}) => {

    return (
        <>
        <Title>Weather or not</Title>
        <WeatherForm selectCity={selectCity} selectDays={selectDays}/>
        <ForecastDisplay weather={weather} accordionDisplayToggle={accordionDisplayToggle}/>
        </>
    )
}

export default WeatherContainer