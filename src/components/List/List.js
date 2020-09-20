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

      {habits.map((habit) => {
        return (
          <Habit
            key={habit.id}
            id={habit.id}
            {...habit}
            completed={habit.completed}
            onItemClick={onItemClick}
            onRemove={onRemove}
          />
        )
      })}
    </>
  )
}

const CurrentDate = styled.div`
  text-align: center;
`

const HabitStyled = styled.li`
  list-style: none;
  margin-top: 20px;
  margin-bottom: 150px;
  position: relative;
  text-align: center;
`
