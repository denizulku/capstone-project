import React, { useState } from 'react'
import DayPicker from 'react-day-picker'
import List from '../List/List'
import Habit from '../List/List'
import 'react-day-picker/lib/style.css'
import styled from 'styled-components/macro'

const WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default function Calendar({ headline }) {
  const modifiers = {
    sundays: { daysOfWeek: [0] },
  }
  const [selectedDate, setSelectedDate] = useState()
  const habits = JSON.parse(localStorage.getItem('habits'))

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
          onDayClick={(day) => {
            setSelectedDate(day.toDateString())
          }}
        />
      </StyledCalendar>
      {selectedDate && (
        <List
          habits={habits.filter(
            (habit) => (habit.completedDates || []).indexOf(selectedDate) > -1
          )}
        />
      )}
    </>
  )
}

const StyledCalendar = styled.section`
  font-family: Roboto, sans-serif;
  display: flex;
  justify-content: center;
`
