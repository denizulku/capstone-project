import React from 'react'
import styled from 'styled-components'

export default function Habit({
  category,
  name,
  completed,
  id,
  onRemove,
  onItemClick,
}) {
  return (
    <>
      <div>
        <DeleteButton type="button" onClick={() => onRemove(id)}>
          x
        </DeleteButton>
        {category}
        <HabitItem className="Habit">
          {name}
          <input
            onChange={() => onItemClick(id)}
            checked={completed}
            type="checkbox"
          />
        </HabitItem>
      </div>
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
