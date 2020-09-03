import React from 'react'
import Form from './Form'

export default {
  title: 'Form',
  component: Form,
}

const Template = (args) => <Form {...args} />

// Each story then reuses that template
export const Primary = Template.bind({})

Primary.args = {
  habits: ['foo', 'bar'],
}
Primary.argTypes = { onSubmit: { action: 'addHabit' } }
