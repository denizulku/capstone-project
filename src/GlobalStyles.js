import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
body {
   box-sizing: border-box;
   margin: 20px;
}

h1 {
   font-family: Roboto;
   margin-top: 10px;
   font-size: 18px;
   text-align: center;
}

html {
   --color-fill: white;
   --color-create-icon: white;
   --color-cancel-icon: #ffb9b9;
   --color-nav-bg: #bcbbbc;
   --color-calendar-sundays: red;
 }

 p {
    font-family: Roboto;
    font-size: 18px;
 }

`
