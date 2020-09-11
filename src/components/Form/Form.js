import React, { useState } from 'react'
import styled from 'styled-components'

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
  display: flex;
  justify-content: center;
`
const InputStyled = styled.input`
  width: 300px;
  height: 30px;
`

const AddButton = styled.button`
  background: hotpink;
  height: 20px;
  border-radius: 5px;
  border: 10px;
`
