import React from 'react'
import styled from 'styled-components'

export default function Habit({ name, completed, id, onItemClick }) {
  return (
    <HabitItem className="Habit">
      {name}
      <input
        onChange={() => onItemClick(id)}
        checked={completed}
        type="checkbox"
      />
    </HabitItem>
  )
}

const HabitItem = styled.div`
  display: inline-block;
  margin-top: 10px;
  width: 260px;
  height: 25px;
  background-color: #ffc179;
  border-radius: 10px;
`
