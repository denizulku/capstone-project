import React from 'react'
import styled from 'styled-components/macro'
import Habit from '../Habit/Habit'
import { displayToday } from '../../util'
import Header from '../Header/Header'

export default function List({ habits, onItemClick, headline }) {
  return (
    <>
      <h2>{headline}</h2>
      <p>Click '+' to create a new habit</p>
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
  text-align: center;
`

const HabitList = styled.li`
  list-style: none;
  margin-top: 20px;
  margin-bottom: 150px;
  position: relative;
  text-align: center;
`
