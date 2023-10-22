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

    let cityTemperatureHourlyToday = ""
    let cityTemperatureDaily = []
    if (weather && 
        weather.forecast && 
        weather.forecast.forecastday &&
        weather.forecast.forecastday[0] &&
        weather.forecast.forecastday[0].hour) {
        cityTemperatureHourlyToday = weather.forecast.forecastday[0].hour.map((hour) => (
            <p key={hour.time_epoch}>
                Time: {hour.time} Temperature: {hour.temp_c}
            </p>
        ))
        cityTemperatureDaily = weather.forecast.forecastday.map((day) => (
            <div key={day.date}>
                {day.hour
                    .filter((time) => time.time_epoch >= localTimeEpoch - 3600)
                    .map((time) => (
                    <p key={time.time_epoch}>
                        Time epoch: {time.time_epoch} <br/>
                        Date&Time: {time.time} <br/>
                        Temp: {time.temp_c} 
                    </p>
                ))}
            </div>
        ));
    }


    return (  
        <>
            <WeatherForm selectCity={selectCity}/>
            <p>City: {cityName}</p>
            <p>Local time: {localTime}</p>
            <p>Current time epoch: {localTimeEpoch}</p>
            <p>Current temperature: {cityTemperature} celcius</p>
            {/* <div>Temperature per hour:           {cityTemperatureHourlyToday}</div> */}
            <div>{cityTemperatureDaily}</div>
        </>
    );
}

export default WeatherContainer;