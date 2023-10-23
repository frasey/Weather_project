import DayAccordion from "./DayAccordion"

const ForecastDisplay = ({weather}) => {

    let localTime = weather.location.localtime   

    let localTimeEpoch = weather.location.localtime_epoch   

    let cityName = weather.location.name  

    let cityTemperature = weather.current.temp_c  

    let cityTemperatureDaily = []

    cityTemperatureDaily = weather.forecast.forecastday.map((day) => {
        return (
            <div key={day.date}>
            <DayAccordion day={day} localTimeEpoch={localTimeEpoch}/>
            </div>
        )
    })

    return (  
        <>
            <h1>City: {cityName}</h1>
            <h2>Local time: {localTime}</h2>
            <h3>Current temperature: {cityTemperature} celcius</h3>
            <div>{cityTemperatureDaily}</div>
        </>
    );
}

export default ForecastDisplay;