import DayDisplay from "./DayDisplay"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet' // leaflet imports
import '../App.css';
import React, { useState, useEffect } from "react"
import { render } from 'react-dom' // high chart libr
import Highcharts from 'highcharts' // high chart libr
import HighchartsReact from 'highcharts-react-official' // high chart libr

const ForecastDisplay = ({weather, accordionDisplayToggle}) => {

    let localTime = weather.location.localtime   
    let localTimeEpoch = weather.location.localtime_epoch   
    let cityName = weather.location.name  
    let cityTemperature = weather.current.temp_c  
    let cityTemperatureDaily = []

    const [latPosition, setLatPosition] = useState(0)
    const [lonPosition, setLonPosition] = useState(0)
    const [chartData, setChartData] = useState([]);

    const ChangeMapView = ({ center }) => {
        const map = useMap();
        map.setView(center, map.getZoom());
        return null;
    };

    useEffect(() => {
            setLatPosition(weather.location.lat)
            setLonPosition(weather.location.lon)
            const data = weather.forecast.forecastday.map((day) => {
                return {
                    date: day.date,
                    avgtemp_c: day.day.avgtemp_c,
                };
            });
            setChartData(data);
    }, [weather])

    const options = {
            chart: {
                type: 'column',
            },
            title: {
                text: `Weekly average temperature in ${cityName} [°C]`,
            },
            xAxis: {
                categories: chartData.map((data) => data.date),
                title: {
                    text: `DATE DD-MM-YYYY`
                }
            },
            yAxis: {
                title: {
                    text: '°C',
                },
            },
            series: [
                {
                    name: '°C',
                    data: chartData.map((data) => data.avgtemp_c),
                },
            ],
    };

    cityTemperatureDaily = weather.forecast.forecastday.map((day) => {
        return (
            <div key={day.date}>
            <DayDisplay day={day} localTimeEpoch={localTimeEpoch} accordionDisplayToggle={accordionDisplayToggle} />
            </div>
        )
    })
    



    return (  
        <>
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>

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