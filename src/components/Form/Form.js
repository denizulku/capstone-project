import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { CirclePicker } from 'react-color'

export default function Form({ headline }) {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <h2>{headline}</h2>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <label>Insert a habit</label>
        <InputStyled
          name="habit"
          type="text"
          placeholder="Give your habit a name"
          ref={register({ required: true })}
        />
        {errors.habit && <p>This is required</p>}

        <label>Choose a category:</label>
        <SelectStyled name="category" ref={register({ required: true })}>
          <option value="">Select</option>
          <option value="Morning routine">Morning routine</option>
          <option value="Nighttime routine">Nighttime routine</option>
          <option value="Fitness">Fitness</option>
          <option value="Health">Health</option>
          <option value="Social">Social</option>
          <option value="Finances">Finances</option>
          <option value="Mindfulness">Mindfulness</option>
          <option value="Hobby">Hobby</option>
          <option value="Misc">Misc</option>
        </SelectStyled>
        {errors.category && <p>This is required</p>}

        <label>Choose a color:</label>
        <ColorInputStyled>
          <CirclePicker />
        </ColorInputStyled>

        <AddButton type="submit">Add habit</AddButton>
      </FormStyled>
    </>
  )
}

const FormStyled = styled.form`
  align-items: center;
  text-align: center;
`
const InputStyled = styled.input`
  width: 250px;
  height: 30px;
`

const AddButton = styled.button`
  margin-top: 40px;
  color: white;
  font-weight: bold;
  background: #b7aefd;
  height: 20px;
  border-radius: 3px;
  border: 10px;
  width: 250px;
  height: 30px;
`
const SelectStyled = styled.select`
  margin-top: 10px;
  position: relative;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  width: 250px;
  height: 30px;
`

const ColorInputStyled = styled.section`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`
