import React from 'react'
import DailyRecommendation from './DailyRecommendation'
import styled from 'styled-components'

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
    return (
        <>
        {/* <Container> */}
            <div className="accordion">
                <div className="accordion-header" onClick={toggleAccordion}>
                    <Card>
                        <h4>{title}</h4>
                        <DailyRecommendation day={day} />
                    </Card>
                </div>
                {day.accordionDisplay && (
                <div className="accordion-content">
                <p>I am a future hourly temp graph c: </p>
                    {content}
                </div>
                )}
            </div>
        {/* </Container> */}
        </>
    )
}
export default Accordion;