import React, { useState } from 'react'
import HourlyDisplay from './HourlyDisplay';

const DayAccordion = ({day, localTimeEpoch}) => {
    const [isOpen, setIsOpen] = useState(false)

    const dailyDate = new Date(day.date)
    const formattedDailyDate = dailyDate.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    const dateFirstLetterUpperCase = formattedDailyDate.charAt(0).toUpperCase() + formattedDailyDate.slice(1)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h4>{dateFirstLetterUpperCase}</h4>
            </div>
            {isOpen && (
            <div className="accordion-content">
                {day.hour
                .filter((time) => time.time_epoch >= localTimeEpoch - 3600)
                .map((time) => {
                    return (
                        <HourlyDisplay key={time.time_epoch} time={time}/>
                    )
                })
            }
            </div>
            )}
        </div>
    )
}
export default DayAccordion;