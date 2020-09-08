import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Navigation() {
  return (
    <Navbar>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/characterlist">Chars</NavLink>
      <NavLink to="/episodelist">Eps</NavLink>
    </Navbar>
  )
}
