import React from 'react'
import { ReactComponent as IconDelete } from '../../components/assets/icons/IconDelete.svg'
import styled from 'styled-components/macro'
import imagePathCircle from '../assets/icons/circle.svg'
import imagePathCheckedCircle from '../assets/icons/checked-circle.svg'

export default function Habit({
  category,
  habits,
  completed,
  id,
  onRemove,
  onItemClick,
  color,
  isReadOnly,
}) {
  return (
    <>
      <Container style={{ backgroundColor: color }}>
        <StyledCategory>{category}</StyledCategory>
        <StyledHabit>
          {!isReadOnly && (
            <DeleteButton
              type="button"
              onClick={() => onRemove(id)}
            ></DeleteButton>
          )}
          {habits}
          {!isReadOnly && (
            <label>
              <HiddenCheckbox
                onChange={() => onItemClick(id)}
                checked={completed}
                type="checkbox"
              />
              <StyledCheckbox checked={completed} />
            </label>
          )}
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
const DeleteButton = styled(IconDelete)`
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.25));
  position: absolute;
  left: 30px;
`
const Container = styled.section`
  border-radius: 5px;
  padding: 20px;
  margin-top: 10px;
`

const StyledCategory = styled.p`
  text-align: center;
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-top: 0;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin: 0;
  position: absolute;
  height: 25px;
  width: 25px;
  opacity: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.25));
  right: 30px;
`

const StyledCheckbox = styled.div`
  margin: 0;
  position: absolute;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.25));
  height: 25px;
  width: 25px;
  right: 30px;
  background: ${(props) =>
    props.checked
      ? `url(${imagePathCheckedCircle})`
      : `url(${imagePathCircle})`};
`
