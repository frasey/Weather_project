import React from 'react'
import WeatherForm from "../components/WeatherForm";
import ForecastDisplay from "../components/ForecastDisplay";
import styled from 'styled-components'

const Title = styled.h1`
        text-align: center;
        padding: 10px;
        font-size: 70px;
    `

const Tagline = styled.p`
    text-align: center;
    font-style: italic;
`

const WeatherContainer = ({weather, selectCity, selectDays, accordionDisplayToggle}) => {

    return (
        <>
        <Title>Weather or Not</Title>
        <Tagline>What to wear when the weather keeps changing</Tagline>
        <WeatherForm selectCity={selectCity} selectDays={selectDays}/>
        <ForecastDisplay weather={weather} accordionDisplayToggle={accordionDisplayToggle}/>
        </>
    )
}

export default WeatherContainer