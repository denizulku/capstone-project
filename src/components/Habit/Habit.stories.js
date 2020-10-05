import React from 'react'
import Habit from './Habit'

export default {
  title: 'Habit',
  component: Habit,
}

const Template = (args) => <Habit {...args} />

export const HabitItems = Template.bind({})

HabitItems.args = {
  category: ['Health'],
  habits: ['Drink water (3L)'],
  color: ['#ff5722'],
}
