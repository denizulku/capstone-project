import React, { useState } from 'react'
import styled from 'styled-components'
import ColorButton from '../ColorButton.js/ColorButton'

// const colorOptions = [
//   { value: '#FFC179', label: 'Orange' },
//   { value: '#FFFF93', label: 'Yellow' },
//   { value: '#B7AEFD', label: 'Purple' },
// ]

export default function Form({ onSubmit, headline }) {
  const [habitInput, setHabitInput] = useState('')
  const [categoryInput, setCategoryInput] = useState('')
  // const [colorInput, setColorInput] = useState('')

  return (
    <>
      <h2>{headline}</h2>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          value={habitInput}
          onChange={(e) => setHabitInput(e.target.value)}
          name="habit"
          type="text"
          placeholder="Insert a habit"
        />
        <SelectStyled
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
        >
          <option value="Morning routine">Morning routine</option>
          <option value="Nighttime routine">Nighttime routine</option>
          <option value="Fitness">Fitness</option>
          <option value="Health">Health</option>
          <option value="Social">Social</option>
        </SelectStyled>
        <AddButton type="submit">Add habit</AddButton>
      </FormStyled>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()

    if (habitInput === '') {
      alert('Please add a new habit and select color')
    } else {
      onSubmit(habitInput)
    }
    setHabitInput('')
    setCategoryInput('')
  }
}

const FormStyled = styled.form`
  display: flex;
  justify-content: center;
`
const InputStyled = styled.input`
  width: 250px;
  height: 30px;
`

const AddButton = styled.button`
  background: hotpink;
  height: 20px;
  border-radius: 3px;
  border: 10px;
`
const SelectStyled = styled.select`
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 5px;
  width: 250px;
  height: 30px;
`
