import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import App from './../../App'

describe('App.test.js', () => {
  it('renders Dashboard when the path exactly equals "/"', () => {
    const { queryByText } = render(
      <BrowserRouter initialEntries={['/']}>
        <App />
      </BrowserRouter>
    )
    expect(queryByText('Welcome!')).toBeInTheDocument()
  })

  it('renders CreatePage when the path exactly equals "/create"', () => {
    const { queryByText } = render(
      <BrowserRouter initialEntries={['/recipes']}>
        <App />
      </BrowserRouter>
    )
    expect(queryByText('Insert a habit')).toBeInTheDocument()
  })

  it('renders OverviewPage when the path exactly equals "/overview"', () => {
    const { queryByText } = render(
      <BrowserRouter initialEntries={['/overview']}>
        <App />
      </BrowserRouter>
    )
    expect(queryByText('Calendar')).toBeInTheDocument()
  })

  it('renders 404 Page when the path is non existing', () => {
    const { queryByText } = render(
      <BrowserRouter initialEntries={['/fjdlkjfei']}>
        <App />
      </BrowserRouter>
    )
    expect(queryByText('Oops! Page not found.')).toBeInTheDocument()
  })
})
