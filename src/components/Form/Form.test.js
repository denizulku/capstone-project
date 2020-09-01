import React from 'react'
import { render } from '@testing-library/react'
import Form from './Form.js'

test('the form data is correct', () => {
  expect(Form).toMatchSnapshot()
})
