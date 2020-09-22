import React from 'react'
import List from './List'

export default {
  title: 'List',
  component: List,
}

const Template = (args) => <List {...args} />

export const ListItems = Template.bind({})

ListItems.args = {
  habits: ['foo'],
}

ListItems.decorators = [
  (Story) => (
    <div style={{ background: 'rgb(244, 67, 54)' }}>
      <Story />
    </div>
  ),
]
ListItems.argTypes = { onClick: { action: 'checkHabit' } }
