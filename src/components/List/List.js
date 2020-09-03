import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Habit from '../Habit/HabitItem'

export default function List({ habits }) {
  return (
    <HabitList>
      {habits.map((habit, index) => (
        <div key={index}>
          <HabitContainer>
            <Habit text={habit} />
          </HabitContainer>
        </div>
      ))}
    </HabitList>
  )
}

const HabitList = styled.section`
  margin-top: 20px;
  margin-left: 70px;
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
