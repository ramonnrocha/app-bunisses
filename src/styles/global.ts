import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  :root {
    font-size: 67.5%
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 0 2px ${(props) => props.theme['blue-linear']};
  }


  body {
    background-color: ${(props) => props.theme['background-color']};
    color: ${(props) => props.theme['blue-linear']};
    -webkit-font-smoothing: antialiased;
  }

  a{
    text-decoration: none;
    font-size: 1.6rem;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${(props) => props.theme['blue-linear']};
  }
`
