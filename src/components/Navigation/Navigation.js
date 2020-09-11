import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import IconHome from '../../components/assets/icons/IconHome.svg'
import IconAdd from '../../components/assets/icons/IconAdd.svg'
import IconMonthlyOverview from '../../components/assets/icons/IconMonthlyOverview.svg'

export default function Navigation() {
  return (
    <NavigationStyled>
      <NavLink exact to="/">
        <img src={IconHome} alt="Go to Dashboard page" />
      </NavLink>
      <NavLink to="/Create">
        <AddIcon src={IconAdd} alt="Create a habit" />
      </NavLink>
      <NavLink to="/Overview">
        <img
          src={IconMonthlyOverview}
          alt="Get a monthly overview of your habits"
        />
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
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #bcbbbc;
`

const AddIcon = styled.img`
  z-index: 100;
  position: relative;
  bottom: 30px;
  filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.3));
`
