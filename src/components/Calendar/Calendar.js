import React from 'react'
import DayPicker, { LocaleUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import styled from 'styled-components/macro'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const WEEKDAYS_LONG = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default function Calendar() {
  return (
    <StyledCalendar>
      <DayPicker
        locale="en"
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        firstDayOfWeek={1}
      />
    </StyledCalendar>
  )
}

const StyledCalendar = styled.div`
  display: flex;
  justify-content: center;
`
