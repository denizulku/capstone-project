import React from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import styled from 'styled-components/macro'

const WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default function Calendar() {
  return (
    <StyledCalendar>
      <DayPicker weekdaysShort={WEEKDAYS_SHORT} firstDayOfWeek={1} />
    </StyledCalendar>
  )
}

const StyledCalendar = styled.div`
  display: flex;
  justify-content: center;
`
