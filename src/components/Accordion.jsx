import React from 'react'
import DailyRecommendation from './DailyRecommendation'
import styled from 'styled-components'
import { render } from 'react-dom' // high chart libr
import Highcharts from 'highcharts' // high chart libr
import HighchartsReact from 'highcharts-react-official' // high chart libr

// const Container = styled.div`
//     display: grid;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     gap: 10px;
// `

const Card = styled.div`
    // flex-wrap: wrap;
    // flex: 0 0 calc(20% - 10px);
    // width: 230px;
    // height: 70px;
    border: 3px;
    border-color: #354f52;
    border-style: solid;
    border-radius: 10px;
    padding: 10px;
`

const Accordion = ({title, content, accordionDisplayToggle, day}) => {
    const toggleAccordion = () => {
        accordionDisplayToggle(day)
    }

    console.log("Day:", day)

    const chartData = day.hour.map((hour) => {
        return {
            time: hour.time,
            temp: hour.temp_c
        }
    })
    console.log("This is the data for the hourly graph", chartData)

    const options = {
        chart: {
            type: 'column',
        },
        title: {
            text: `Hourly Temperatures`,
        },
        xAxis: {
            categories: chartData.map((time) => time.time.substring(11,16)),
            title: {
                text: `Hour`
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
                }
            }
        },
        series: [
            {
                name: '°C',
                data: chartData.map((data) => data.temp),
                color: '#354f52',
                backgroundColor: '#F5F5F5'
            },
        ],
    };


    return (
        <>
        {/* <Container> */}
            <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion}>
                    <Card>
                        <h4>{title.split(" ")[0].substring(0, 3)}, {title.split(" ")[1].substring(0, 2)} {title.split(" ")[2].substring(0, 1).toUpperCase()}{title.split(" ")[2].substring(1, 3)} </h4>
                        {/* <p>{title.split(" ")}</p> */}
                        <DailyRecommendation day={day} />
                    </Card>
                </div>
                {day.accordionDisplay && (
                <div className="accordion-content">
                    <div>
                        <HighchartsReact highcharts={Highcharts} options={options} />
                    </div>
                    {content}
                </div>
                )}
            </div>
        {/* </Container> */}
        </>
    )
}
export default Accordion;