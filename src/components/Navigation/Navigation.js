import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as IconHome } from '../../components/assets/icons/IconHome.svg'
import { ReactComponent as IconAdd } from '../../components/assets/icons/IconAdd.svg'
import { ReactComponent as IconMonthlyOverview } from '../../components/assets/icons/IconMonthlyOverview.svg'

export default function Navigation() {
  return (
    <NavigationStyled>
      <NavLink exact to="/">
        <IconHome />
      </NavLink>
      <NavLink data-cy="create" to="/Create">
        <AddIcon />
      </NavLink>
      <NavLink to="/Overview">
        <IconMonthlyOverview />
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

const AddIcon = styled(IconAdd)`
  z-index: 100;
  position: relative;
  bottom: 30px;
  filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.3));
`
