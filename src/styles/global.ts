import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  :root {
    --nav-height: 10rem;

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
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${(props) => props.theme['blue-linear']};
  }
`

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  left: 12rem;
  width: calc(100% - 12rem);
  margin-right: 4rem;

  .noTasks div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
`
