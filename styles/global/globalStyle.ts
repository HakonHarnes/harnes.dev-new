import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ffff;
    --foreground: #212121;
    
    --color-primary: #131920;
    --color-primary-dark: #0D1115;
    --color-primary-light: #181E25;
    
    --color-secondary: #F33939;
    --color-secondary-light: #fa5757;

    --color-link-inactive: #d9d9d9;
    
    --color-background-interests: #f5f5f5
  }

  [data-theme='dark'] {
    --background: #131920;
    --foreground: white;

    --color-link-inactive: #202a36;
    --color-background-interests: #181E25;
  }
  
  ::-moz-selection { 
    background-color: #F33939; 
    color: #fff; 
  } 

  ::selection { 
    background-color: #fa5757; 
    color: #fff; 
}

  html, body {
    margin: 0;
    padding: 0;
    color: var(--foreground);
    background: var(--background);
    font-family: Inter, Open-Sans, Helvetica, Sans-Serif;
    transition: background 0.2s linear;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

export default GlobalStyle
