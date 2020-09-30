import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
body {
   box-sizing: border-box;
   margin: 20px;
}

h1 {
   font-family: Helvetica;
   font-size: 18px;
   text-align: center;
   margin-bottom: 30px;
}

html {
   --color-fill: white;
   --color-create-icon: white;
   --color-cancel-icon: #f99;
   --color-nav-bg: #bcbbbc;
   --color-calendar-sundays: red;
 }

 p {
    font-family: Helvetica;
    font-size: 18px;
 }

`
