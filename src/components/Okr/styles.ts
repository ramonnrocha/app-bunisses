import styled from 'styled-components'

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
