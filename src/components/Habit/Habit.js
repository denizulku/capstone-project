import React from 'react'
import styled from 'styled-components'

export default function Habit({
  category,
  habit,
  completed,
  id,
  onRemove,
  onItemClick,
}) {
  return (
    <>
      <StyledHabit>
        <DeleteButton type="button" onClick={() => onRemove(id)}>
          x
        </DeleteButton>
        <p>{category}</p>
        <HabitItem>
          {habit}
          <input
            onChange={() => onItemClick(id)}
            checked={completed}
            type="checkbox"
          />
        </HabitItem>
      </StyledHabit>
    </>
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
const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 5px;
  right: 5px;
`
const StyledHabit = styled.section``
