import DailyDisplay from "./DailyDisplay"

const ForecastDisplay = ({weather}) => {

    let localTime = weather.location.localtime   

    let localTimeEpoch = weather.location.localtime_epoch   

    let cityName = weather.location.name  

    let cityTemperature = weather.current.temp_c  

    let cityTemperatureDaily = []

    cityTemperatureDaily = weather.forecast.forecastday.map((day) => (
        <div key={day.date}>
            {day.hour
                .filter((time) => time.time_epoch >= localTimeEpoch - 3600)
                .map((time) => {

                    return (
                        <DailyDisplay time={time}/>
                    )
                })
            }  
        </div>
    ));

    return (  
        <>
            <p>City: {cityName}</p>
            <p>Local time: {localTime}</p>
            <p>Current temperature: {cityTemperature} celcius</p>
            <div>{cityTemperatureDaily}</div>
        </>
    );
}

export default ForecastDisplay;