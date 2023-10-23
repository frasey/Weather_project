const DailyDisplay = ({time}) => {

    const dateTime = new Date(time.time);

    const formattedDate = dateTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const formattedTime = dateTime.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true })
    
    const dateFirstLetterUpperCase = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
    
    return ( 
        <div> 
            Day: {dateFirstLetterUpperCase} <br/>
            Time: {formattedTime} <br/>
            Temp: {time.temp_c} °C
        </div>
    )
}

export default DailyDisplay;