import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as HeaderLogo } from '../../components/assets/Logo/HeaderLogo.svg'
import PropTypes from 'prop-types'

export default function Header() {
  return <StyledHeader />
}

const StyledHeader = styled(HeaderLogo)`
  margin-top: 0;
  padding-top: 0;
  left: 0;

  z-index: 100;
  text-align: center;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 60px;
`
