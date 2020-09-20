import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { CirclePicker } from 'react-color'

export default function Form({ onSubmit, headline }) {
  const { register, handleSubmit, errors } = useForm()
  const [color, setColor] = useState()

  const onHabitSubmit = (newHabit) => {
    onSubmit({ ...newHabit, id: uuidv4(), color: color })
  }
  return (
    <>
      <h2>{headline}</h2>
      <FormStyled onSubmit={handleSubmit(onHabitSubmit)}>
        <InputStyled
          name="habits"
          placeholder="Give your habit a name"
          ref={register({ required: true })}
        />
        {errors.habits && <ErrorMessage>This is required</ErrorMessage>}

        <SelectStyled name="category" ref={register({ required: true })}>
          <option value="">Choose a category for your habit</option>
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
        {errors.category && <ErrorMessage>This is required</ErrorMessage>}
        <br />
        <label>Choose a color:</label>
        <ColorInputStyled>
          <CirclePicker
            type="color"
            name="color"
            label="hex"
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
            ref={register({ name: color }, { required: true })}
          />
        </ColorInputStyled>

        {errors.color && <ErrorMessage>This is required</ErrorMessage>}

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
const ErrorMessage = styled.p`
  color: red;
  font-size: 70%;
`
