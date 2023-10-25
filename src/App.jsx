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
      const mappedForecastDays = data.forecast.forecastday.map((day) => {
        day.accordionDisplay = false
        return (
          day
        )
      })
      data.forecast.forecastday = mappedForecastDays
      setWeather(data)
    })
    // .catch((err) => {
    //   console.error(`error ${err}`)
    //   response.status(404)
    //   response.json({status : 404, error : err})
    //   })
  }, [apiKey, city, days])

  const accordionDisplayToggle = (dayToToggle) => {
    const copyOfWeather = {...weather}
    const copyOfForecastDay = copyOfWeather.forecast.forecastday.map((day) => {
      if (day.date === dayToToggle.date) {
        const copyOfDay = {...day}
        copyOfDay.accordionDisplay = !copyOfDay.accordionDisplay
        return copyOfDay
      // } else if (day.accordionDisplay === true) {
      //   const copyOfDay = {...day}
      //   copyOfDay.accordionDisplay = false
      //   return copyOfDay
      } else {
        return day
      }
    })
    copyOfWeather.forecast.forecastday = copyOfForecastDay
    setWeather(copyOfWeather)
  }

  return (
    <>
      {weather.location ? <WeatherContainer weather={weather} selectCity={selectCity} selectDays={selectDays} accordionDisplayToggle={accordionDisplayToggle}/> : null}
    </>
  )
}

export default App
