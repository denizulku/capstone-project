import React from 'react'
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
      <Container style={{ backgroundColor: color }}>
        <StyledCategory>{category}</StyledCategory>
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
      </Container>
    </>
  )
}

const StyledHabit = styled.div`
  display: inline-block;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  font-family: Roboto, sans-serif;
  font-size: 18px;
`
const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
`
const Container = styled.section`
  border-radius: 5px;
  padding: 10px;
  margin: 20px;
`

const StyledCategory = styled.p`
  text-align: center;
  font-size: 16px;
  color: white;
  font-weight: bold;
`
