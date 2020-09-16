import React from 'react'
import styled from 'styled-components/macro'

export default function Form({ onSubmit, headline }) {
  return (
    <>
      <h2>{headline}</h2>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled name="habit" type="text" placeholder="Insert a habit" />
      </FormStyled>
    </>
  )

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const input = form.habit
    if (input.value === '') {
      alert('Please add a new habit')
    } else {
      onSubmit(input.value)
    }
    form.reset()
  }
}

const FormStyled = styled.form`
  display: flex;
  justify-content: center;
`
const InputStyled = styled.input`
  width: 300px;
  height: 30px;
`
