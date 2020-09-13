import React, { useState } from 'react'
import styled from 'styled-components'

const colorOptions = [
  { value: '#FFC179', label: 'Orange' },
  { value: '#FFFF93', label: 'Yellow' },
  { value: '#B7AEFD', label: 'Purple' },
]

export default function Form({ onSubmit }) {
  const [habitInput, setHabitInput] = useState('')

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
        {colorOptions.map((color) => (
          <div>{color.label}</div>
        ))}
        <AddButton type="submit">Add habit</AddButton>
      </FormContainer>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()
    if (habitInput === '') {
      alert('Please add a new habit')
    } else {
      onSubmit(habitInput)
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
