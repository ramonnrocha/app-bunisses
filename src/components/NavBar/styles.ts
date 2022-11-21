import styled from 'styled-components'

export const NavBarContainer = styled.div`
  position: absolute;
  display: inline-block;
  padding: 6rem;
  width: 12rem;

  height: calc(100vw - var(--nav-height));
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.2rem;
  background: ${(props) => props.theme['blue-linear']};

  a {
    color: ${(props) => props.theme['background-color']};
  }
`
