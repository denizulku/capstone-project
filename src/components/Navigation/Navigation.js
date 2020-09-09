import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import IconHome from '../../components/assets/icons/IconHome.svg'
import IconPlus from '../../components/assets/icons/IconPlus.svg'
import IconMonthlyOverview from '../../components/assets/icons/IconMonthlyOverview.svg'

export default function Navigation() {
  return (
    <NavigationStyled>
      <NavLink exact to="/">
        <img src={IconHome} alt="Home" />
      </NavLink>
      <NavLink to="/Create">
        <AddIcon src={IconPlus} alt="Create" />
      </NavLink>
      <NavLink to="/Overview">
        <img src={IconMonthlyOverview} alt="Monthly Overview" />
      </NavLink>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.div`
  font-size: 100%;
  height: 64px;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #bcbbbc;
`

const AddIcon = styled.img`
  position: relative;
  bottom: 30px;
`
