import React from 'react'
import Calendar from './Calendar'

export default {
  title: 'Calendar',
  component: Calendar,
}

const Template = (args) => <Calendar {...args} />

export const Primary = Template.bind({})
