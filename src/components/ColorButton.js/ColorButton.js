import React from 'react'
import styled from 'styled-components/macro'

export const habitbg = {
  orange: '#FFC179',
  yellow: '#FFFF93',
  purple: '#B7AEFD',
}

export default function selectColor({ habitbg }) {
  return <ColorButton habitbg={habitbg}>Orange</ColorButton>
}

const ColorButton = styled.div`
  background: ${(props) => habitbg[props.habitbg]};
  border-radius: 5px;
`
