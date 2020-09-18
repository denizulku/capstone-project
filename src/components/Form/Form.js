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
  border-radius: 5px;
  border: 10px;
`
