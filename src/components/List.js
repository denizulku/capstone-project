import React from 'react'
import styled from 'styled-components'
import Habit from './HabitItem'

export default function List({ habits }) {
  return (
    <HabitList>
      {habits.map((habit, completed) => (
        <div>
          <HabitContainer>
            <Habit checked={completed} text={habit} />
          </HabitContainer>
        </div>
      ))}
    </HabitList>
  )
}

const HabitList = styled.section`
  margin-top: 20px;
  margin-left: 15%;
`
const HabitContainer = styled.div`
  margin-top: 10px;
  width: 260px;
  height: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffc179;
  border-radius: 10px;
`
