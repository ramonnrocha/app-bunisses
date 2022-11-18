import styled from 'styled-components'

export const OrksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 12.5rem;
  margin-right: 1rem;

  .noTasks div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
`
export const DivBarContainerOkr = styled.div`
  display: flex;
  gap: 1rem;

  border-bottom: 2px solid ${(props) => props.theme['icon-details']};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 2.4rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme['blue-black']};
  margin-bottom: 5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-right: 2rem;
  }

  a {
    width: 13rem;
    height: 3.8rem;
    background: transparent;
    border-bottom: 1px solid ${(props) => props.theme['blue-linear']};

    color: ${(props) => props.theme['blue-linear']};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    cursor: pointer;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['blue-linear']};
    }

    &.active {
      color: white;
    }
  }
`
export const MyOkrsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
`
