import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: relative;
  padding: 6rem;
  width: 100%;
  height: calc(2.1rem + var(--nav-height));
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['background-color']};
  border-bottom: 2px solid ${(props) => props.theme['icon-details']};
  overflow: hidden;

  nav {
    display: flex;
    gap: 1.6rem;

    a {
      width: 17rem;
      height: 3.8rem;
      background: ${(props) => props.theme['blue-linear']};
      border: 1px solid transparent;
      border-radius: 8px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      cursor: pointer;

      :hover {
        background: ${(props) => props.theme['blue-hover']};
      }

      &:hover {
        border-bottom: 3px solid transparent;
      }

      &.active {
        color: white;
      }
    }
  }
`

export const ButtonPayContainer = styled.button`
  width: 45rem;
  height: 3.8rem;
  background: ${(props) => props.theme['blue-linear']};
  border: 1px solid transparent;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme['blue-hover']};
  }
`
