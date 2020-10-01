import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import { CirclePicker } from 'react-color'
import Header from '../Header/Header'

export default function Form({ onSubmit, headline }) {
  const history = useHistory()
  const { register, handleSubmit, setValue, errors, trigger } = useForm()
  const [color, setColor] = useState()

  const onHabitSubmit = (newHabit) => {
    onSubmit({ ...newHabit, id: uuidv4(), color: color })
    history.push('/')
  }
  const handleColorSelect = (color) => {
    setColor(color)
    setValue('color', color)
    trigger('color')
  }
  return (
    <>
      <h1>{headline}</h1>
      <FormStyled onSubmit={handleSubmit(onHabitSubmit)}>
        <InputStyled
          data-cy="habits"
          name="habits"
          placeholder="Insert a habit, e.g.: 'Gym', 'Journal'.. "
          ref={register({
            required: true,
            pattern: { value: /.*\S.*/, message: 'This is required' },
            maxLength: 24,
          })}
        />

        {errors.habits && errors.habits.type === 'required' && (
          <ErrorMessage>This is required</ErrorMessage>
        )}
        {errors.habits && errors.habits.type === 'maxLength' && (
          <ErrorMessage>Max length exceeded</ErrorMessage>
        )}
        {errors.habits && errors.habits.type === 'pattern' && (
          <ErrorMessage>This is required</ErrorMessage>
        )}

        <SelectStyled
          data-cy="category"
          name="category"
          ref={register({ required: true })}
        >
          <option value="">Choose a category</option>
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

        <p>Choose a color:</p>
        <ColorInputStyled>
          <CirclePicker
            name="color"
            color={color}
            onChange={(updatedColor) => handleColorSelect(updatedColor.hex)}
            ref={register({ name: 'color' }, { required: true })}
          />
        </ColorInputStyled>

        {errors.color && <ErrorMessage>This is required</ErrorMessage>}

        <AddButton type="submit">
          <p>Add habit</p>
        </AddButton>
      </FormStyled>
    </>
  )
}

const FormStyled = styled.form`
  text-align: center;
  input,
  select,
  textarea {
    font-size: 18px;
    outline: none;
  }
`
const InputStyled = styled.input`
  box-sizing: border-box;
  ::-moz-placeholder {
    color: black;
    opacity: 1;
  }
  --webkit-appearance: none;
  margin: 0;
  padding-left: 14px;
  width: 100%;
  height: 7vh;
  border: 0;
  border-radius: 10px;
  box-shadow: var(--shadow-black);
`

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  color: var(--main-white);
  font-weight: bold;
  background: var(--color-add-button);
  border-radius: 10px;
  border: 10px;
  width: 100%;
  height: 7vh;
  margin-bottom: 120px;
  box-shadow: var(--shadow-black);
`
const SelectStyled = styled.select`
  --webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='grey' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  height: 6vh;
  width: 100%;
  padding-left: 10px;
  border-radius: 10px;
  border: 0;
  box-shadow: var(--shadow-black);
`

const ColorInputStyled = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`
const ErrorMessage = styled.p`
  color: var(--main-red);
  font-size: 70%;
`
