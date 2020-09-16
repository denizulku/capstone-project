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

export default function Header({ headline }) {
  return (
    <>
      <StyledHeader>
        <img src={HeaderLogo} alt="Logo for the App Habits" />
        <StyledSubline>{headline}</StyledSubline>
      </StyledHeader>
    </>
  )
}

const StyledHeader = styled.header`
  padding-top: 20px;
  text-align: center;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 80px;
`

const StyledSubline = styled.div`
  margin-top: 10px;
  font-size: 16px;
  position: relative;
  text-align: center;
`
