import React from 'react'
import List from './List'

export default {
  title: 'List',
  component: List,
}

const Template = (args) => <List {...args} />

export const Primary = Template.bind({})

Primary.args = {
  habits: ['foo', 'bar'],
}

Primary.argTypes = { onClick: { action: 'checkHabit' } }
