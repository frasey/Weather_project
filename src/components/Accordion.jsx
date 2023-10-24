import React from 'react'
import DailyRecommendation from './DailyRecommendation'

const Accordion = ({title, content, accordionDisplayToggle, day}) => {
    const toggleAccordion = () => {
        accordionDisplayToggle(day)
    }
    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h4>{title}</h4>
                <DailyRecommendation day={day} />
            </div>
            {day.accordionDisplay && (
            <div className="accordion-content">
                {content}
            </div>
            )}
        </div>
    )
}
export default Accordion;