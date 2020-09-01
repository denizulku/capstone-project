import React from 'react'
import Input from './Form'

export default {
  title: 'HabitInput',
  component: Input,
}
export const Form = () => {
  return <Form type="text" placeholder="Insert a habit" />
}
