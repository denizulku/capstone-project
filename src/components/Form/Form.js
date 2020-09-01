import React, { useState } from 'react'
import styled from 'styled-components'
import List from '../List/List'

export default function Form() {
  const [habits, setHabits] = useState([])
  return (
    <>
      <Container onSubmit={handleSubmit}>
        <Input name="habit" type="text" placeholder="Insert a habit" />
      </Container>
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

const Container = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`
const Input = styled.input`
  width: 300px;
  height: 30px;
`
