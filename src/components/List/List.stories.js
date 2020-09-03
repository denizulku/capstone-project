import React from 'react'
import List from './List'

export default {
  title: 'Habit List',
  component: List,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <List {...args} />

export const ListItem = Template.bind({})
