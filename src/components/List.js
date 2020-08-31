import React from 'react'
import styled from 'styled-components'

export default function List({ habits, deleteHabit }) {
  return (
    <Habit>
      {habits.map((habit) => (
        <div>
          {habit}
          <button onClick={() => deleteHabit(habit)}> x </button>
        </div>
      ))}
    </Habit>
  )
}

const Habit = styled.section`
  background-color: crimson;
  width: 260px;
`
