import DayDisplay from "./DayDisplay"
import KeyDisplay from "./KeyDisplay";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet' // leaflet imports
import '../App.css';
import React, { useState, useEffect } from "react"
import styled from 'styled-components'

const Map = styled.div`
    padding: 30px;
`
const CityInfo = styled.div`
    text-align: center;
    padding: 20px 0;
`
const DisplayDayCards = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`

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
            <KeyDisplay />
            <Map>
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
            </Map>
            <CityInfo>
                <h1>{cityName}</h1>
                <h2>Local time: {localTime}</h2>
                {/* <img src ={weather.current.condition.icon}/> */}
                <h3>Current temperature: {cityTemperature} °C</h3>
            </CityInfo>
            <DisplayDayCards>{cityTemperatureDaily}</DisplayDayCards>
        </>
    );
}

export default ForecastDisplay;