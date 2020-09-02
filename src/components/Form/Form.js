import React, { useState } from 'react'
import styled from 'styled-components'
import List from '../List/List'

export default function Form() {
  const [habits, setHabits] = useState([])
  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <InputStyled name="habit" type="text" placeholder="Insert a habit" />
      </FormContainer>
      <List habits={habits} />
    </>
  )

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const input = form.habit
    setHabits([input.value, ...habits])
    form.reset()
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
