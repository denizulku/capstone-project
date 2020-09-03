import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function Form({ habits, onSubmit }) {
  return (
    <>
      <Container onSubmit={handleSubmit}>
        <InputStyled name="habit" type="text" placeholder="Insert a habit" />
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
const InputStyled = styled.input`
  width: 300px;
  height: 30px;
`
