import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as HeaderLogo } from '../../components/assets/Logo/HeaderLogo.svg'
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
        <Logo />
      </StyledHeader>
    </>
  )
}

const StyledHeader = styled.header`
  margin-top: 0;
  padding-top: 0;
  text-align: center;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 60px;
`
const Logo = styled(HeaderLogo)``
