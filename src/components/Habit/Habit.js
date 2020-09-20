import React, { useState } from 'react'
import styled from 'styled-components'

export default function Habit({
  category,
  habits,
  completed,
  id,
  onRemove,
  onItemClick,
  color,
}) {
  return (
    <>
      <div style={{ backgroundColor: color }}>
        <p>{category}</p>
        <StyledHabit>
          {habits}
          <input
            onChange={() => onItemClick(id)}
            checked={completed}
            type="checkbox"
          />
          <DeleteButton type="button" onClick={() => onRemove(id)}>
            x
          </DeleteButton>
        </StyledHabit>
      </div>
    </>
  )
}

const StyledHabit = styled.div`
  display: inline-block;
  margin-top: 10px;
  width: 260px;
  height: 25px;
  border-radius: 10px;
`
const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
`
