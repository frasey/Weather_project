import WeatherForm from "../components/WeatherForm";

const WeatherContainer = ({weather, selectCity}) => {

    let cityName = ""
    if (weather && weather.location && weather.location.name) {
        cityName = weather.location.name;   
    }

    let cityTemperature = ""
    if (weather && weather.current && weather.current.temp_c) {
        cityTemperature = weather.current.temp_c  
    }

    let cityTemperatureHourly = ""
    if (weather && 
        weather.forecast && 
        weather.forecast.forecastday &&
        weather.forecast.forecastday[0] &&
        weather.forecast.forecastday[0].hour) {
        cityTemperatureHourly = weather.forecast.forecastday[0].hour.map((hour) => (
            <p>Time: {hour.time.substring(11,16)} Temperature: {hour.temp_c}</p>)
        )
    }


    return (  
        <>
            <WeatherForm selectCity={selectCity}/>
            <p>City: {cityName}</p>
            <p>Current temperature: {cityTemperature} celcius</p>
            <div>Temperature per hour:          
            {cityTemperatureHourly}</div>
        </>
    );
}

export default WeatherContainer;