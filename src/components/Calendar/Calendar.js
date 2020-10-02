import React, { useState } from 'react'
import DayPicker from 'react-day-picker'
import List from '../List/List'
import 'react-day-picker/lib/style.css'
import styled from 'styled-components/macro'

const WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default function Calendar({ headline }) {
  const modifiers = {
    sundays: { daysOfWeek: [0] },
    mondays: { daysOfWeek: [1] },
    tuesdays: { daysOfWeek: [2] },
    wednesdays: { daysOfWeek: [3] },
    thursdays: { daysOfWeek: [4] },
    fridays: { daysOfWeek: [5] },
    saturdays: { daysOfWeek: [6] },
  }
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString())
  const habits = JSON.parse(localStorage.getItem('habits'))

  const modifiersStyles = {
    sundays: {
      color: 'var(--color-calendar-sundays)',
      fontSize: '100%',
      verticalAlign: '0',
      padding: '12px',
    },
    mondays: {
      fontSize: '100%',
      verticalAlign: '0',
      padding: '12px',
    },
    tuesdays: {
      fontSize: '100%',
      verticalAlign: '0',
      padding: '12px',
    },
    wednesdays: {
      fontSize: '100%',
      verticalAlign: '0',
      padding: '12px',
    },
    thursdays: {
      fontSize: '100%',
      verticalAlign: '0',
      padding: '12px',
    },
    fridays: {
      fontSize: '100%',
      verticalAlign: '0',
      padding: '12px',
    },
    saturdays: {
      fontSize: '100%',
      verticalAlign: '0',
      padding: '12px',
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
                    float: 'left',
                    backgroundColor: color,
                    borderRadius: '50%',
                    width: '8px',
                    height: '8px',
                  }}
                ></div>
              )
            })}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <h1>{headline}</h1>
      <StyledCalendar>
        <DayPicker
          showOutsideDays
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
      <SelectedDate>{selectedDate}</SelectedDate>
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
  width: 100%;
`
const SelectedDate = styled.p`
  text-align: center;
`
