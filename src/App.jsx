import React, { useEffect, useState } from 'react'
import './App.css'
import WeatherContainer from './containers/WeatherContainer'

function App() {

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

  const [city, setCity] = useState('Edinburgh')
  const [weather, setWeather] = useState({})
  const [days, setDays] = useState(1)


  const selectCity = (cityName) => {
    setCity(cityName)
  } 

  const selectDays = (days) => {
    setDays(days)
  } 

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}%20&q=${city}&days=${days}&aqi=no&alerts=no`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      setWeather(data)
    })  
  }, [apiKey, city, days])

  return (
    <>
      {weather.location ? <WeatherContainer weather={weather} selectCity={selectCity} selectDays={selectDays}/> : null}
    </>
  )
}

export default App
