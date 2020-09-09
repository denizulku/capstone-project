import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import App from './App'

describe('App.test.js', () => {
  it('renders Dashboard when the path exactly equals "/"', () => {
    const { getByTestId } = render(
      <BrowserRouter initialEntries={['/']}>
        <App />
      </BrowserRouter>
    )
    expect(getByTestId('Welcome!'))
  })

  it('renders CreatePage when the path exactly equals "/create"', () => {
    const { getByTestId } = render(
      <BrowserRouter initialEntries={['/create']}>
        <App />
      </BrowserRouter>
    )
    expect(getByTestId('Insert a habit'))
  })

  it('renders OverviewPage when the path exactly equals "/overview"', () => {
    const { getByTestId } = render(
      <BrowserRouter initialEntries={['/overview']}>
        <App />
      </BrowserRouter>
    )
    expect(getByTestId('Calendar'))
  })
})
