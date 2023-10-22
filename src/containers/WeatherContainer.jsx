import WeatherForm from "../components/WeatherForm";

const WeatherContainer = ({weather, selectCity}) => {

    let localTime = ""
    if (weather && 
        weather.location && 
        weather.location.localtime) {
        localTime = weather.location.localtime   
    }
    
    let localTimeEpoch = ""
    if (weather && 
        weather.location && 
        weather.location.localtime_epoch) {
        localTimeEpoch = weather.location.localtime_epoch   
    }

    let cityName = ""
    if (weather && 
        weather.location && 
        weather.location.name) {
        cityName = weather.location.name  
    }

    let cityTemperature = ""
    if (weather && 
        weather.current && 
        weather.current.temp_c) {
        cityTemperature = weather.current.temp_c  
    }

    let cityTemperatureHourly = ""
    if (weather && 
        weather.forecast && 
        weather.forecast.forecastday &&
        weather.forecast.forecastday[0] &&
        weather.forecast.forecastday[0].hour) {
        cityTemperatureHourly = weather.forecast.forecastday[0].hour.map((hour) => (
            <p /* key={weather.location.tz_id} */>Time: {hour.time.substring(11,16)} Temperature: {hour.temp_c}</p>)
        )
    }


    return (  
        <>
            <WeatherForm selectCity={selectCity}/>
            <p>City: {cityName}</p>
            <p>Local time: {localTime}</p>
            <p>Local time in seconds: {localTimeEpoch}</p>
            <p>Current temperature: {cityTemperature} celcius</p>
            <div>Temperature per hour:          
            {cityTemperatureHourly}</div>
        </>
    );
}

export default WeatherContainer;