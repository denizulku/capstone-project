import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as IconHome } from '../../components/assets/icons/IconHome.svg'

import { ReactComponent as IconAdd } from '../../components/assets/icons/IconAdd.svg'
import { ReactComponent as IconMonthlyOverview } from '../../components/assets/icons/IconMonthlyOverview.svg'

export default function Navigation() {
  const createPath = useLocation().pathname === '/Create' ? 1 : 0
  return (
    <>
      <NavigationStyled>
        <NavLink exact to="/" activeStyle={{ fill: 'var(--color-fill)' }}>
          <HomeIconStyled />
        </NavLink>
        <NavLink data-cy="create" to={createPath ? '/' : '/Create'}>
          <AddIcon createPath={createPath} />
        </NavLink>
        <NavLink to="/Overview" activeStyle={{ fill: 'var(--color-fill)' }}>
          <OverviewIconStyled />
        </NavLink>
      </NavigationStyled>
    </>
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
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--color-nav-bg);
`

const HomeIconStyled = styled(IconHome)`
  z-index: 1;
`

const OverviewIconStyled = styled(IconMonthlyOverview)`
  z-index: 1;
`

const AddIcon = styled(IconAdd)`
  z-index: 1;
  position: relative;
  bottom: 30px;
  filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.3));
  border-radius: 50%;
  background-color: ${(props) =>
    props.createPath ? 'var(--color-cancel-icon)' : 'var(--color-create-icon)'};
  transform: ${(props) => (props.createPath ? 'rotate(45deg)' : 'rotate(0)')};
  transform-origin: 50% 50%;
  transition: transform 0.3s;
`
