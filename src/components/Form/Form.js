import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

export default function Form({ onSubmit }) {
  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <InputStyled name="habit" type="text" placeholder="Insert a habit" />
      </FormContainer>
    </>
  )

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const input = form.habit
    if (input.value === '') {
      return alert('Please add a new habit')
    } else {
      onSubmit(input.value)
    }
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