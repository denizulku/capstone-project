import React from 'react'
import styled from 'styled-components/macro'
import Habit from '../Habit/Habit'

export default function List({ habits, onItemClick, displayToday }) {
  return (
    <>
      <CurrentDate>{displayToday()}</CurrentDate>
      <HabitList>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            id={habit.id}
            name={habit.name}
            completed={habit.completed}
            onItemClick={onItemClick}
          />
        ))}
      </HabitList>
    </>
  )
}

const CurrentDate = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

const HabitList = styled.section`
  margin-top: 20px;
  position: relative;
  text-align: center;
`
