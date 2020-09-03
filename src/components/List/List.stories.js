import React from 'react'
import HabitContainer from './List'

export default {
  title: 'List',
  component: HabitContainer,
}

const Template = (args) => <HabitContainer {...args} />

export const ListItem = Template.bind({})

ListItem.args = {
  primary: true,
}
