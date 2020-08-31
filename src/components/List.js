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
`
const Habit = styled.div`
  width: 260px;
  margin-top: 5px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  background-color: crimson;
  border-radius: 10px;
`
