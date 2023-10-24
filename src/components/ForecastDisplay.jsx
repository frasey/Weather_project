import DailyDisplay from "./DailyDisplay"

const ForecastDisplay = ({weather}) => {

    let localTime = weather.location.localtime   

    let localTimeEpoch = weather.location.localtime_epoch   

    let cityName = weather.location.name  

    let cityTemperature = weather.current.temp_c  

    let cityTemperatureDaily = []

    cityTemperatureDaily = weather.forecast.forecastday.map((day) => {
        const dailyDate = new Date(day.date)
        const formattedDailyDate = dailyDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        const dateFirstLetterUpperCase = formattedDailyDate.charAt(0).toUpperCase() + formattedDailyDate.slice(1)
        return (
            <div key={day.date}>
                <p>{dateFirstLetterUpperCase}</p>
                {day.hour
                .filter((time) => time.time_epoch >= localTimeEpoch - 3600)
                .map((time) => {
                    return (
                        <DailyDisplay key={time.time_epoch} time={time}/>
                    )
                })
            }
            </div>
        )
    })
        return (  
        <>
            <p>City: {cityName}</p>
            <p>Local time: {localTime}</p>
            {/* <img src ={weather.current.condition.icon}/> */}
            <p>Current temperature: {cityTemperature} °C</p>
            <div>{cityTemperatureDaily}</div>
        </>
    );
}

export default ForecastDisplay;