import React from 'react'
const Accordion = ({title, content, accordionDisplayToggle, day}) => {
    const toggleAccordion = () => {
        accordionDisplayToggle(day)
    }
    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h4>{title}</h4>
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