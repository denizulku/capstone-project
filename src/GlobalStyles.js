import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

* {
   box-sizing: border-box;
   font-face: Helvetica;
}

body {
   margin: 20px;
   margin-bottom: 120px;
   padding: 0;
}

h1 {
   font-size: 1em;
   text-align: center;
   margin-bottom: 30px;
}

:root {
   --main-black: #000000;
   --main-white: #FFFFFF;
   --main-red: #DC143C;

   --color-fill: white;

   --color-create-icon: white;
   --color-cancel-icon: #f99;
   --color-nav-bg: #bcbbbc;

   --color-calendar-sundays: red;

   --shadow-black: 0 0 15px 4px rgba(0, 0, 0, 0.1);

   --color-add-button: #a296ff;
 }

 p {
    font-family: Helvetica;
    font-size: 112.5%;
 }

`
