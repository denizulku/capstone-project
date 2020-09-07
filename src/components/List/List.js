import React from 'react'
import styled from 'styled-components/macro'
import Habit from '../Habit/Habit'
import { displayToday } from '../../util'

export default function List({ habits, onItemClick }) {
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
  text-align: center;
`

const HabitList = styled.section`
  margin-top: 20px;
  position: relative;
  text-align: center;
`
