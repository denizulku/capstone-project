import React, { useState, Component } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

export default function Form({ onSubmit }) {
  const [habitInput, setHabitInput] = useState('')
  // const [habitColor, setHabitColor] = useState()
  const options = [
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'purple', label: 'Purple' },
  ]
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
      <Select options={options} />
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
