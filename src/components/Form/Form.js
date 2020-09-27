import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import { CirclePicker } from 'react-color'
import { useSpring, animated } from 'react-spring'

export default function Form({ onSubmit, headline, formAnimation }) {
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
      <animated.div style={formAnimation}>
        <h2>{headline}</h2>
        <FormStyled onSubmit={handleSubmit(onHabitSubmit)}>
          <InputStyled
            data-cy="habits"
            name="habits"
            placeholder="Insert a habit, e.g.: 'Gym', 'Journal'.. "
            ref={register({
              required: true,
              pattern: { value: /.*\S.*/, message: 'This is required' },
              maxLength: 26,
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

          <Label>Choose a color:</Label>
          <ColorInputStyled>
            <CirclePicker
              name="color"
              color={color}
              onChange={(updatedColor) => handleColorSelect(updatedColor.hex)}
              ref={register({ name: 'color' }, { required: true })}
            />
          </ColorInputStyled>

          {errors.color && <ErrorMessage>This is required</ErrorMessage>}

          <AddButton type="submit">Add habit</AddButton>
        </FormStyled>
      </animated.div>
    </>
  )
}

const FormStyled = styled.form`
  text-align: center;
  input,
  select,
  textarea {
    font-size: 16px;
  }
`
const InputStyled = styled.input`
  width: 70%;
  height: 5vh;
`

const AddButton = styled.button`
  margin-top: 30px;
  color: white;
  font-weight: bold;
  background: #a296ff;
  border-radius: 3px;
  border: 10px;
  width: 70%;
  height: 7vh;
  margin-bottom: 120px;
`
const SelectStyled = styled.select`
  --webkit-appearance: none;
  margin-top: 10px;
  position: relative;
  height: 5vh;
  width: 73%;
`

const ColorInputStyled = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`
const ErrorMessage = styled.p`
  color: red;
  font-size: 70%;
`

const Label = styled.p`
  font-size: 16px;
  padding-top: 10px;
`
