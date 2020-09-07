import React from 'react'
import styled from 'styled-components/macro'
import Habit from '../Habit/HabitItem'

export default function List({ habits, onItemClick, displayToday }) {
  return (
    <>
      <CurrentDate>{displayToday}</CurrentDate>
      <HabitList>
        {habits.map((habit) => (
          <div key={habit.id}>
            <HabitContainer>
              <Habit
                id={habit.id}
                name={habit.name}
                completed={habit.completed}
                onItemClick={onItemClick}
              />
            </HabitContainer>
          </div>
        ))}
      </HabitList>
    </>
  )
}

const CurrentDate = styled.div`
  display: flex;
  text-align: center;
`

const HabitList = styled.section`
  margin-top: 20px;
  position: relative;
  text-align: center;
`
const HabitContainer = styled.div`
  display: inline-block;
  margin-top: 10px;
  width: 260px;
  height: 25px;
  background-color: #ffc179;
  border-radius: 10px;
`
