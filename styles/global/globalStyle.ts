import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --background: white;
    --foreground: black;
    
    --color-primary: #131920;
    --color-primary-light: #363D51;
    
    --color-secondary: #F33939;
    --color-secondary-light: #fa5757;
  }

  [data-theme='dark'] {
    --background: #131920;
    --foreground: white;

    --color-primary: #131920;
    --color-primary-light: #363D51;
  }
  
  ::-moz-selection { 
    background-color: #F33939; 
    color: #fff; 
  } 

  ::selection { 
    background-color: #F33939; 
    color: #fff; 
}

  html, body {
    margin: 0;
    padding: 0;
    color: var(--foreground);
    background: var(--background);
    font-family: Inter, Open-Sans, Helvetica, Sans-Serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
