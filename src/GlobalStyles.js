import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
body {
   font-family: sans-serif;
}

h2 {
   margin-top: 10px;
   font-size: 16px;
   position: relative;
   text-align: center;
}

html {
   --color-fill: white;
   --color-create-icon: white;
   --color-cancel-icon: #ffb9b9;
   --color-nav-bg: #bcbbbc;
 }
`
