import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import IconHome from './components/assets/icons/IconHome.svg'
import IconPlus from './components/assets/icons/IconPlus.svg'
import IconMonthlyOverview from '.components/assets/icons/IconMonthlyOverview.svg'

export default function Navigation() {
  return (
    <Navbar>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="#">+</NavLink>
      <NavLink to="#">Calendar</NavLink>
    </Navbar>
  )
}

const Navbar = styled.div`
  font-size: 100%;
  height: 64px;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #bcbbbc;
  a {
    color: white;
    text-decoration: none;
  }
`
