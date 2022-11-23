import styled from 'styled-components'

export const HeaderContainer = styled.header`
  div {
    position: relative;
    padding: 4rem;
    width: calc(100% - 10rem);
    left: 10rem;
    height: 5rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.theme['background-color']};
    border-bottom: 2px solid ${(props) => props.theme['icon-details']};
    overflow: hidden;

    @media (max-width: 700px) {
      width: 555px;
      left: 0rem;
    }
  }

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

      @media (max-width: 800px) {
        visibility: hidden;
      }

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
  background: ${(props) => props.theme['blue-light']};
  border: 10px solid transparent;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;

  @media (max-width: 700px) {
    visibility: hidden;
  }

  :hover {
    background: ${(props) => props.theme['blue-hover']};
  }
`
