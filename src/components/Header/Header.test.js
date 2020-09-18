import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Header from './Header'

beforeEach(() => {
  render(<Header></Header>)
})

describe('Header.test.js', () => {
  it('should consist a header with an img tag', () => {
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
