import React from 'react'
import styled from 'styled-components/macro'
import Habit from '../Habit/Habit'
import { displayToday } from '../../util'

export default function List({
  habits,
  onRemove,
  onItemClick,
  headline,
  isReadOnly,
}) {
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
            completed={
              (habit.completedDates || []).indexOf(new Date().toDateString()) >
              -1
            }
            onItemClick={onItemClick}
            onRemove={onRemove}
            isReadOnly={isReadOnly}
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
  margin-bottom: 120px;
`
