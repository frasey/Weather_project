import WeatherForm from "../components/WeatherForm";
import ForecastDisplay from "../components/ForecastDisplay";

const WeatherContainer = ({weather, selectCity, selectDays}) => {
    return (
        <>
        <WeatherForm selectCity={selectCity} selectDays={selectDays}/>
        <ForecastDisplay weather={weather}/>
        </>
    )
}

export default WeatherContainer