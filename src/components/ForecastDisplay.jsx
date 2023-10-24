import DayDisplay from "./DayDisplay"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet' // leaflet imports
import '../App.css';
import React, { useState, useEffect } from "react"

const ForecastDisplay = ({weather, accordionDisplayToggle}) => {

    let localTime = weather.location.localtime   

    let localTimeEpoch = weather.location.localtime_epoch   

    let cityName = weather.location.name  

    let cityTemperature = weather.current.temp_c  

    let cityTemperatureDaily = []

    const [latPosition, setLatPosition] = useState(0)
    const [lonPosition, setLonPosition] = useState(0)

    const ChangeMapView = ({ center }) => {
        const map = useMap();
        map.setView(center, map.getZoom());
        return null;
    };

    useEffect(() => {
        if (weather) {
            setLatPosition(weather.location.lat)
            setLonPosition(weather.location.lon)
        }
    }, [weather])



    cityTemperatureDaily = weather.forecast.forecastday.map((day) => {
        return (
            <div key={day.date}>
            <DayDisplay day={day} localTimeEpoch={localTimeEpoch} accordionDisplayToggle={accordionDisplayToggle} />
            </div>
        )
    })

    return (  
        <>
            <MapContainer id="map" center={[latPosition, lonPosition]} zoom={10} scrollWheelZoom={false}>
            <ChangeMapView center={[latPosition, lonPosition]} />
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latPosition, lonPosition]}>
                <Popup>
                    Hello {cityName}
                </Popup>
                </Marker>
            </MapContainer>
            <h1>City: {cityName}</h1>
            <h2>Local time: {localTime}</h2>
            {/* <img src ={weather.current.condition.icon}/> */}
            <h3>Current temperature: {cityTemperature} °C</h3>
            <div>{cityTemperatureDaily}</div>
        </>
    );
}

export default ForecastDisplay;