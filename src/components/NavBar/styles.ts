import styled from 'styled-components'

export const NavBarContainer = styled.div`
  position: absolute;
  display: inline-block;
  padding: 6rem;
  width: 12rem;
  margin-top: var(--nav-heigth);
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.2rem;
  background: ${(props) => props.theme['blue-linear']};

  a {
    color: ${(props) => props.theme['background-color']};
  }

  @media (max-width: 700px) {
    visibility: hidden;
    opacity: 1;
  } ;
`
