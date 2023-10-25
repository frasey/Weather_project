import DayDisplay from "./DayDisplay"
import KeyDisplay from "./KeyDisplay";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet' // leaflet imports
import '../App.css';
import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { render } from 'react-dom' // high chart libr
import Highcharts from 'highcharts' // high chart libr
import HighchartsReact from 'highcharts-react-official' // high chart libr


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
            console.log("This is the chart's data:", data)
    }, [weather])

    const options = {
            chart: {
                type: 'column',
            },
            title: {
                text: `Daily average temperature in ${cityName} [°C]`,
            },
            xAxis: {
                categories: chartData.map((data) => data.date),
                title: {
                    text: `Date`
                }
            },
            yAxis: {
                title: {
                    text: '°C',
                },
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f} °C'
                    },
                }
            },
            series: [
                {
                    name: '°C',
                    data: chartData.map((data) => data.avgtemp_c),
                    color: '#354f52',
                    backgroundColor: '#F5F5F5'
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
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    );
}

export default ForecastDisplay;