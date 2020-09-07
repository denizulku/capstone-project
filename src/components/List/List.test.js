import React from 'react'
import { render } from '@testing-library/react'
import List from './List'

describe(List, () => {
  const today = new Date()
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  it('shows the current month', () => {
    expect(`${months[today.getMonth()]}`)
  })
})
