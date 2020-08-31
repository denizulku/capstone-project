import React from 'react'
import styled from 'styled-components'

export default function List({ habits, deleteHabit }) {
  return (
    <HabitList>
      {habits.map((habit) => (
        <div>
          <Habit>
            {habit}
            <button onClick={() => deleteHabit(habit)}> x </button>
          </Habit>
        </div>
      ))}
    </HabitList>
  )
}

const HabitList = styled.section`
  margin-top: 20px;
  margin-left: 15%;
`
const Habit = styled.div`
  width: 260px;
  height: 25px;
  margin-top: 5px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffc179;
  border-radius: 10px;
`
