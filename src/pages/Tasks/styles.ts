import styled from 'styled-components'

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 12.5rem;
  margin-right: 1rem;
  width: 100%;
`
export const FormTasksContainer = styled.div`
  width: max(120.6rem);
  margin-top: -2.4rem;
  margin-bottom: 6.4rem;
  align-items: center;

  form {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
  }

  textarea {
    width: max(90.8rem);
    height: min(6rem);
    color: ${(props) => props.theme['blue-black']};
    padding: 1.6rem;
    border: 1px solid ${(props) => props.theme['icon-details']};
    border-radius: 8px;

    resize: none;
    font-size: 1.6rem;
    margin-right: 0.8rem;
  }

  textarea:focus {
    border: 1px solid ${(props) => props.theme['blue-linear']};
  }

  button {
    display: inline;
    background-color: ${(props) => props.theme['blue-linear']};
    color: white;
    border: 1px solid ${(props) => props.theme['icon-details']};
    border-radius: 8px;
    width: min(10rem);
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    background-color: ${(props) => props.theme['blue-light']};
  }

  .button:not(:disabled):hover {
    background: ${(props) => props.theme['blue-hover']};
  }

  .button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const HomeTaskContainer = styled.div`
  width: max(100.6rem);

  header {
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.6rem;
    font-weight: bold;
  }

  header .created {
    color: ${(props) => props.theme['blue-medium']};
  }

  header .completed {
    color: ${(props) => props.theme['blue-medium']};
  }

  .hometasks {
    margin-top: 2.4rem;
    height: 27rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }

  .noTasks {
    width: 100%;
    margin-top: -1rem;
    padding-top: 5.4rem;
    border-top: 1px solid ${(props) => props.theme['icon-details']};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .hometask .noTasks h4 {
    font-size: 1.6rem;
    color: ${(props) => props.theme['icon-details']};
  }

  .hometask .noTasks p {
    font-size: 1.6rem;
    color: ${(props) => props.theme['icon-details']};
  }
`
