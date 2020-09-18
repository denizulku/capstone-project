import React from 'react'
import styled from 'styled-components/macro'

const colors = [
  {
    orange: '#FFC179',
    yellow: '#FFFF93',
    purple: '#B7AEFD',
  },
]

export default function Colors() {
  '#btn'.click(function () {
    'div[class^="box"]'.each(function () {
      var randomColor = Math.floor(Math.random() * colors.length)(this).css(
        'background-color',
        colors[randomColor]
      )
    })
  })
}

// export default function selectColor({ habitbg }) {
//   return <ColorButton habitbg={habitbg}>Orange</ColorButton>
// }
