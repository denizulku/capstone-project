import React from 'react'
import { render } from '@testing-library/react'
import Form from './Form.js'

test('renders correctly', () => {
  expect(Form).toMatchSnapshot()
})
