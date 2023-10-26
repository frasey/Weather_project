import DayDisplay from "./DayDisplay"
import KeyDisplay from "./KeyDisplay";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet' // leaflet imports
import 'leaflet/dist/leaflet.css'; 
import '../App.css';
import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { render } from 'react-dom' // high chart libr
import Highcharts from 'highcharts' // high chart libr
import HighchartsReact from 'highcharts-react-official' // high chart libr


const Map = styled.div`
    padding: 40px;
`
const CityInfo = styled.div`
    text-align: center;
    padding: 20px 0;
`
const DisplayDayCards = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px 1px;
    justify-content: space-evenly;

    & > * {
        flex: 1;
        min-width: 0;
        margin: 0;
        padding: 0;
    }
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
                    rotation: 0,  // rotates y-axis unit
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
            <Map>
                <MapContainer  id="map" center={[latPosition, lonPosition]} zoom={10} scrollWheelZoom={false}>
                <ChangeMapView center={[latPosition, lonPosition]} />
                    <TileLayer className="tilelayer"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[latPosition, lonPosition]}>
                    <Popup>
                        Hello {cityName}
                    </Popup>
                    </Marker>
                    <Marker position={[-20, 60]}><Popup></Popup></Marker><Marker position={[-20, 65]}><Popup></Popup></Marker><Marker position={[-20, 70]}><Popup></Popup></Marker><Marker position={[-20, 75]}><Popup></Popup></Marker><Marker position={[-20, 80]}><Popup></Popup></Marker><Marker position={[-20, 55]}><Popup></Popup></Marker><Marker position={[-25, 55]}><Popup></Popup></Marker><Marker position={[-30, 55]}><Popup></Popup></Marker><Marker position={[-35, 55]}><Popup></Popup></Marker><Marker position={[-40, 55]}><Popup></Popup></Marker><Marker position={[-40, 60]}><Popup></Popup></Marker><Marker position={[-40, 65]}><Popup></Popup></Marker><Marker position={[-40, 70]}><Popup></Popup></Marker><Marker position={[-40, 75]}><Popup></Popup></Marker><Marker position={[-40, 80]}><Popup></Popup></Marker><Marker position={[-40, 55]}><Popup></Popup></Marker><Marker position={[-45, 80]}><Popup></Popup></Marker><Marker position={[-50, 80]}><Popup></Popup></Marker><Marker position={[-55, 80]}><Popup></Popup></Marker><Marker position={[-60, 80]}><Popup></Popup></Marker><Marker position={[-60, 60]}><Popup></Popup></Marker><Marker position={[-60, 65]}><Popup></Popup></Marker><Marker position={[-60, 70]}><Popup></Popup></Marker><Marker position={[-60, 75]}><Popup></Popup></Marker><Marker position={[-60, 80]}><Popup></Popup></Marker><Marker position={[-60, 55]}><Popup></Popup></Marker><Marker position={[-45, 67]}><Popup></Popup></Marker><Marker position={[-50, 67]}><Popup></Popup></Marker><Marker position={[-55, 67]}><Popup></Popup></Marker><Marker position={[-60, 67]}><Popup></Popup></Marker><Marker position={[-65, 67]}><Popup></Popup></Marker><Marker position={[-68, 67]}><Popup></Popup></Marker><Marker position={[-30, 67]}><Popup></Popup></Marker><Marker position={[-35, 67]}><Popup></Popup></Marker><Marker position={[-40, 67]}><Popup></Popup></Marker><Marker position={[-25, 67]}><Popup></Popup></Marker><Marker position={[-20, 67]}><Popup></Popup></Marker><Marker position={[-15, 67]}><Popup></Popup></Marker><Marker position={[-10, 67]}><Popup></Popup></Marker>
                </MapContainer>
            </Map>
            <KeyDisplay/>
            <CityInfo>
                <h1>{cityName}</h1>
                <h2>Local Time: {localTime}</h2>
                <img src ={weather.current.condition.icon}/>
                <h3>Current Temperature: {cityTemperature} °C</h3>
            </CityInfo>
            <DisplayDayCards>{cityTemperatureDaily}</DisplayDayCards>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    );
}

export default ForecastDisplay;