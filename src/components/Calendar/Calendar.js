import React, { useState } from 'react'
import DayPicker from 'react-day-picker'
import List from '../List/List'
import 'react-day-picker/lib/style.css'
import styled from 'styled-components/macro'

const WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default function Calendar({ headline }) {
  const modifiers = {
    sundays: { daysOfWeek: [0] },
  }
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString())
  const habits = JSON.parse(localStorage.getItem('habits'))

  const modifiersStyles = {
    sundays: {
      color: '#000000',
      backgroundColor: '#F0F0F0',
    },
  }

  const renderDay = (date) => {
    const habitsPerDay = habits
      .filter((habit) => {
        return (habit.completedDates || []).includes(date.toDateString())
      })
      .reduce((group, habit) => {
        if (habit.color in group) {
          group[habit.color]++
        } else {
          group[habit.color] = 1
        }

        return group
      }, {})

    return (
      <>
        <div>
          {date.getDate()}
          <div>
            {Object.entries(habitsPerDay).map(([color, count]) => {
              return (
                <div
                  style={{
                    backgroundColor: color,
                    borderRadius: '50%',
                  }}
                >
                  {count}
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
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
          renderDay={renderDay}
        />
      </StyledCalendar>
      {selectedDate && (
        <List
          isReadOnly
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
