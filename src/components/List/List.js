import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Habit from '../Habit/Habit'
import { displayToday } from '../../util'

export default function List({ habits, onRemove, onItemClick, headline }) {
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
            {...habits}
            completed={habit.completed}
            onItemClick={onItemClick}
            onRemove={onRemove}
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
