import styled from 'styled-components'

export const OkrContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12.5rem;
  margin-right: 1rem;

  form {
    align-items: left;
  }
`
export const DivBarContainer = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 2px solid ${(props) => props.theme['icon-details']};
  align-items: center;
  justify-content: left;
  width: 100%;
  height: auto;
  padding: 2.4rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme['blue-black']};

  button {
    border: none;
    background: transparent;
    align-items: center;
    width: auto;
    height: auto;
    color: ${(props) => props.theme['blue-black']};
    cursor: pointer;
    margin-left: 1.6rem;
  }
`

export const FormContainer = styled.form`
  display: block;
  width: 100%;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  gap: 2.4rem;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 4rem;
  a {
    text-decoration: none;
  }
`
export const InputContainer = styled.input`
  width: auto;

  color: ${(props) => props.theme['blue-black']};
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  border: solid 1px ${(props) => props.theme['icon-details']};
  border-radius: 8px;
  background-color: transparent;
  font-size: 1.6rem;
  outline: none;

  ::placeholder {
    color: ${(props) => props.theme['icon-details']};
  }
`

export const DivContainerForm = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 2.4rem;

  div {
    width: auto;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    display: grid;
    grid-template-columns: 50% 1fr;
  }
`
export const PrivateContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  button {
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 999px;
    cursor: pointer;
  }

  .check {
    background: ${(props) => props.theme['blue-linear']};
  }
`

export const ButtonContainer = styled.button`
  margin-left: 4rem;
  width: 12rem;
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
  margin-bottom: 4rem;

  :hover {
    background: ${(props) => props.theme['blue-hover']};
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: white;
  }
`

export const ActionPlanContainer = styled.div`
  display: flex;
`
