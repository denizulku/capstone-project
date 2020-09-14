import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import HeaderLogo from '../../components/assets/Logo/HeaderLogo.svg'

Header.propTypes = {
  title: PropTypes.string,
}

export default function Header({ title }) {
  return (
    <StyledHeadline>
      <img src={HeaderLogo} alt="Logo for the App called Habits" />
      {title}
    </StyledHeadline>
  )
}

const StyledHeadline = styled.div`
  top: 0;
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  width: 100%;
  height: 80px;
`
