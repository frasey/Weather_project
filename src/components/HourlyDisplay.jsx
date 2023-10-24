const HourlyDisplay = ({time}) => {

    const dateTime = new Date(time.time)

    const formattedTime = dateTime.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true })

    return ( 
        <div> 
            Time: {formattedTime} <br/>
            Temp: {time.temp_c} °C <br/>
            Wind Speed: {time.wind_mph} mph<br/>
            Precipitation: {time.chance_of_rain} 
            %<br/>
            <><br/></>
        </div>
    )
}
export default HourlyDisplay;