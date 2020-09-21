import React from 'react'
import IconDelete from '../../components/assets/icons/IconDelete.svg'
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
          <DeleteButton type="button" onClick={() => onRemove(id)}>
            <img src={IconDelete} alt="Delete habit" />
          </DeleteButton>
          {habits}
          <input
            onChange={() => onItemClick(id)}
            checked={completed}
            type="checkbox"
          />
        </StyledHabit>
      </Container>
    </>
  )
}

const StyledHabit = styled.div`
  display: inline-block;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-family: Roboto, sans-serif;
  font-size: 18px;
`
const DeleteButton = styled.div`
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.25));
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
