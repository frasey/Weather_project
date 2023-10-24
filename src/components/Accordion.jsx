import React from 'react'
import DailyRecommendation from './DailyRecommendation'
import styled from 'styled-components'

const FlexBox = styled.div`
    display: flex;
    /* flex-direction: row;
    align-items: center; */
    background-color: blue;
`
const Header = styled.div`
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    background-color: yellow;
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: green;
`

const Accordion = ({title, content, accordionDisplayToggle, day}) => {
    const toggleAccordion = () => {
        accordionDisplayToggle(day)
    }
    return (
        <FlexBox>
            <div className="accordion">
                <Header>
                <div className="accordion-header" onClick={toggleAccordion}>
                    <h4>{title}</h4>
                    <DailyRecommendation day={day} />
                </div>
                </Header>
                {day.accordionDisplay && (
                <Box>
                <div className="accordion-content">
                    {content}
                </div>
                </Box>
                )}
            </div>
        </FlexBox>
    )
}
export default Accordion;