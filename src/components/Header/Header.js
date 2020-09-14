import React from 'react'
import styled from 'styled-components'
import HeaderLogo from '../../components/assets/Logo/HeaderLogo.svg'

export default function Header({ title }) {
  return (
    <HeaderContainer>
      <img src={HeaderLogo} alt="Logo for the App called Habits" />
      {title}
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  margin: 0px;
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  width: 100%;
`
