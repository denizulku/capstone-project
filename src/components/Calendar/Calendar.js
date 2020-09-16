import React from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import styled from 'styled-components/macro'

const WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default function Calendar({ headline }) {
  const modifiers = {
    sundays: { daysOfWeek: [0] },
  }
  const modifiersStyles = {
    sundays: {
      color: '#000000',
      backgroundColor: '#F0F0F0',
    },
  }
  return (
    <>
      <h2>{headline}</h2>
      <StyledCalendar>
        <DayPicker
          weekdaysShort={WEEKDAYS_SHORT}
          firstDayOfWeek={1}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
        />
      </StyledCalendar>
    </>
  )
}

const StyledCalendar = styled.section`
  font-family: Roboto, sans-serif;
  display: flex;
  justify-content: center;
`
