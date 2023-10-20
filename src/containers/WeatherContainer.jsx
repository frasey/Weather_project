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


    return (  
        <>
            <WeatherForm selectCity={selectCity}/>
            <p>City: {cityName}</p>
            <p>Temperature: {cityTemperature} celcius</p>
        </>
    );
}

export default WeatherContainer;