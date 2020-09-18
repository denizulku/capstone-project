import React, { useState } from 'react'
import styled from 'styled-components'
import { GithubPicker } from 'react-color'
import InputColor from 'react-input-color'
import ColorButton from '../ColorButton.js/ColorButton'

// const colorOptions = [
//   { value: '#FFC179', label: 'Orange' },
//   { value: '#FFFF93', label: 'Yellow' },
//   { value: '#B7AEFD', label: 'Purple' },
// ]

export default function Form({ onSubmit, headline }) {
  const [habitInput, setHabitInput] = useState('')
  const [categoryInput, setCategoryInput] = useState('')
  const [color, setColor] = React.useState({})
  // const [colorInput, setColorInput] = useState('')

  return (
    <>
      <h2>{headline}</h2>
      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          value={habitInput}
          onChange={(e) => setHabitInput(e.target.value)}
          name="habit"
          type="text"
          placeholder="Insert a habit"
        />
        <SelectStyled
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
          name="category"
        >
          <option>Choose a category</option>
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
        <GithubPicker />
        <AddButton type="submit">Add habit</AddButton>
      </FormStyled>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()

    if (habitInput === '') {
      alert('Please add a new habit and select color')
    } else {
      onSubmit(habitInput)
    }
    setHabitInput('')
    setCategoryInput('')
  }
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
  margin-top: 30px;
  background: hotpink;
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
`

const ColorInputStyled = styled.section`
  margin-top: 10px;
`
