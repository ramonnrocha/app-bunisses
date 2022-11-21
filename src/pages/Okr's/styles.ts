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
export const OkrSpreedContainer = styled.div`
  background: transparent;
  border: 1px solid ${(props) => props.theme['icon-details']};
  width: max(120rem);
  height: min(12rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  border-radius: 4px;
  box-shadow: 1px 3px 3px ${(props) => props.theme['icon-details']};
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  padding-inline: 2rem;
  img {
    width: 6rem;
    height: 6rem;
    border-radius: 999px;
    border: 1px solid ${(props) => props.theme['icon-details']};
  }
`
export const OkrDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  .details {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1.6rem;
  }
`

export const ProgressDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.6rem;
  .barProgress {
    width: 19rem;
    height: 2rem;
    border: 1px solid ${(props) => props.theme['icon-details']};
    border-radius: 8px;
    background: 1px solid ${(props) => props.theme['icon-details']};
    overflow: hidden;
  }
  .cover {
    background-color: ${(props) => props.theme['yellow-500']};
    width: 50%;
    height: 2rem;
    object-fit: cover;
    color: white;
    text-align: center;
  }
`

export const EditorOkrContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.6rem;
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`
