import styled from 'styled-components'

export const NavBarContainer = styled.div`
  div {
    position: fixed;
    top: 0;
    z-index: 30;
    padding: 3rem;
    width: 10rem;
    height: 100%;
    display: flex;
    align-items: center;

    flex-direction: column;
    gap: 3.2rem;
    background: ${(props) => props.theme['blue-linear']};

    a {
      color: white;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: background 200ms;
      transition: 0.2s;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['background-color']};
        transition: 0.2s;
      }

      &.active {
        border-bottom: 3px solid ${(props) => props.theme['background-color']};

        color: ${(props) => props.theme['background-color']};
      }
    }

    img {
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 700px) {
    visibility: hidden;
    opacity: 1;
  }
`
