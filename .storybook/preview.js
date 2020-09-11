import { MemoryRouter } from 'react-router-dom'
import React from 'react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>,
]
