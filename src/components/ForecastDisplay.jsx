import DayDisplay from "./DayDisplay"

const ForecastDisplay = ({weather, accordionDisplayToggle}) => {

    let localTime = weather.location.localtime   

    let localTimeEpoch = weather.location.localtime_epoch   

    let cityName = weather.location.name  

    let cityTemperature = weather.current.temp_c  

    let cityTemperatureDaily = []

    cityTemperatureDaily = weather.forecast.forecastday.map((day) => {
        return (
            <div key={day.date}>
            <DayDisplay day={day} localTimeEpoch={localTimeEpoch} accordionDisplayToggle={accordionDisplayToggle} />
            </div>
        )
    })

    return (  
        <>
            <h1>City: {cityName}</h1>
            <h2>Local time: {localTime}</h2>
            {/* <img src ={weather.current.condition.icon}/> */}
            <h3>Current temperature: {cityTemperature} °C</h3>
            <div>{cityTemperatureDaily}</div>
        </>
    );
}

export default ForecastDisplay;