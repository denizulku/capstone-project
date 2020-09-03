import React, { useState } from 'react'
import styled from 'styled-components'
import List from '../List/List'

export default function Form({ habits, onSubmit }) {
  return (
    <>
      <Container onSubmit={handleSubmit}>
        <Input name="habit" type="text" placeholder="Insert a habit" />
      </Container>
    </>
  )

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const input = form.habit
    onSubmit(input.value)
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
