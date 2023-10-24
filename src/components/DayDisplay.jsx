import React from 'react'
import HourlyDisplay from './HourlyDisplay'
import Accordion from './Accordion'

const DayDisplay = ({day, localTimeEpoch, accordionDisplayToggle}) => {

    const dailyDate = new Date(day.date)
    const formattedDailyDate = dailyDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    const dateFirstLetterUpperCase = formattedDailyDate.charAt(0).toUpperCase() + formattedDailyDate.slice(1)

    const dayContent = day.hour.filter((time) => time.time_epoch >= localTimeEpoch - 3600)
        .map((time) => {
            return (
                <HourlyDisplay key={time.time_epoch} time={time}/>
            )
        })

    return (
        <>

        <Accordion key={day.date} accordionDisplayToggle={accordionDisplayToggle}
        title={dateFirstLetterUpperCase} content={dayContent} day={day}
        />
        </>
    )
}
export default DayDisplay;