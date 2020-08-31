import React from 'react'
import styled from 'styled-components'

export default function List({ habits, deleteHabit }) {
  return (
    <section>
      {habits.map((habit) => (
        <Habit>
          {habit}
          <button onClick={() => deleteHabit(habit)}> x </button>
        </Habit>
      ))}
    </section>
  )
}

const Habit = styled.div`
  background-color: crimson;
  width: 100px;
`
