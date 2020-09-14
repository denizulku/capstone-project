import React, { useState } from 'react'
import styled from 'styled-components'
import ColorButton from '../ColorButton.js/ColorButton'

// const colorOptions = [
//   { value: '#FFC179', label: 'Orange' },
//   { value: '#FFFF93', label: 'Yellow' },
//   { value: '#B7AEFD', label: 'Purple' },
// ]

export default function Form({ onSubmit, selectColor }) {
  const [habitInput, setHabitInput] = useState('')
  // const [colorInput, setColorInput] = useState('')

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <InputStyled
          value={habitInput}
          onChange={(e) => setHabitInput(e.target.value)}
          name="habit"
          type="text"
          placeholder="Insert a habit"
        />
        <ColorButton selectColor={selectColor} />
        <AddButton type="submit">Add habit</AddButton>
      </FormContainer>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()

    if (habitInput === '' || selectColor === '') {
      alert('Please add a new habit and select color')
    } else {
      onSubmit(habitInput, selectColor)
    }
    setHabitInput('')
  }
}

const FormContainer = styled.form`
  margin-top: 20px;
  align-items: center;
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
