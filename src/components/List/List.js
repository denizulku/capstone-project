import React from 'react'
import styled from 'styled-components/macro'
import Habit from '../Habit/Habit'
import { displayToday } from '../../util'

export default function List({ habits, onRemove, onItemClick, headline }) {
  return (
    <>
      <h2>{headline}</h2>
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
      <CreateHabitText>Click '+' to create a new habit</CreateHabitText>
    </>
  )
}

const CurrentDate = styled.div`
  text-align: center;
`

const CreateHabitText = styled.p`
  text-align: center;
`
