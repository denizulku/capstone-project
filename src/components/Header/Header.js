import React from 'react'
import styled from 'styled-components'
import HeaderLogo from '../../components/assets/Logo/HeaderLogo.svg'

export default function Header() {
  return (
    <>
      <StyledHeader>
        <img src={HeaderLogo} alt="Logo for the App Habits" />
      </StyledHeader>
    </>
  )
}

const StyledHeader = styled.div`
  top: 0;
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  width: 100%;
  height: 80px;
`
