import React from 'react'
import styled from 'styled-components'

export default function Header({ title }) {
  return (
    <div>
      <HeaderTitle>{title}</HeaderTitle>
    </div>
  )
}

const HeaderTitle = styled.h1``
