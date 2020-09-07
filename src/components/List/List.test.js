import React from 'react'
import { render } from '@testing-library/react'
import List from './List'
import renderer from 'react-test-renderer'

test('renders correctly', () => {
  expect(List).toMatchSnapshot()
})
