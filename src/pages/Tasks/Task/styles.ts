import styled from 'styled-components'

export const TasksContainer = styled.div`
  width: max(90.6rem);
  height: min(7.2rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 1.2rem;
  color: ${(props) => props.theme['blue-black']};
  padding: 1.6rem;
  border: 1px solid ${(props) => props.theme['icon-details']};
  border-radius: 8px;
  background: transparent;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;

  button {
    background: transparent;
    border: none;
    color: ${(props) => props.theme['icon-details']};
    cursor: pointer;
    transition: color 0.2s;
  }

  button:hover {
    color: ${(props) => props.theme['danger-red']};
  }

  input {
    cursor: pointer;
  }

  .task .textCompleted p {
    color: ${(props) => props.theme['icon-details']};
    text-decoration: line-through;
  }

  .checkContainer {
    width: 1.6rem;
    height: 1.6rem;
    background: none;
    border: none;
  }

  .checkContainer div {
    width: 100%;
    height: 100%;
    border-radius: 999px;
    border: 2px solid ${(props) => props.theme['icon-details']};
  }

  .checkContainer svg {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme['blue-linear']};
    border-radius: 999px;
    color: ${(props) => props.theme['green-500']};
  }

  .checkContainer > svg:hover {
    color: ${(props) => props.theme['green-500']};
  }
`
