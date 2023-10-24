import React from 'react'
import DailyRecommendation from './DailyRecommendation'
import styled from 'styled-components'

const Card = styled.div`
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
    return (
        <>
            <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion}>
                    <Card>
                        <h4>{title}</h4>
                        <DailyRecommendation day={day} />
                    </Card>
                </div>
                {day.accordionDisplay && (
                <div className="accordion-content">
                    {content}
                </div>
                )}
            </div>
        </>
    )
}
export default Accordion;