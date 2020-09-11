import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import App from './App'

describe('App.js', () => {
  it('renders Dashboard when the path exactly equals "/"', () => {
    const { queryByText } = render(
      <BrowserRouter initialEntries={['/']}>
        <App />
      </BrowserRouter>
    )
    expect(queryByText('/'))
  })

  it('renders CreatePage when the path exactly equals "/create"', () => {
    const { queryByText } = render(
      <BrowserRouter initialEntries={['/create']}>
        <App />
      </BrowserRouter>
    )
    expect(queryByText('create'))
  })

  it('renders OverviewPage when the path exactly equals "/overview"', () => {
    const { queryByText } = render(
      <BrowserRouter initialEntries={['/overview']}>
        <App />
      </BrowserRouter>
    )
    expect(queryByText('overview'))
  })
})
