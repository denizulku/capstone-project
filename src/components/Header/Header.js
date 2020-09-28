import React from 'react'
import styled from 'styled-components/macro'
import HeaderLogo from '../../components/assets/Logo/HeaderLogo.svg'
import PropTypes from 'prop-types'

Header.propTypes = {
  headline: PropTypes.string,
}

Header.defaultProps = {
  headline: 'Dashboard',
}

export default function Header() {
  return (
    <>
      <StyledHeader>
        <img src={HeaderLogo} alt="Logo for the App Habits" />
      </StyledHeader>
    </>
  )
}

const StyledHeader = styled.header`
  margin-top: 0;
  padding-top: 20px;
  text-align: center;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 60px;
`
