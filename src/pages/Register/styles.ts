import styled from 'styled-components'

export const RegisterContaier = styled.div`
  width: 100%;
  height: 80rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1.6rem;

  h4 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 2.4rem;
  }

  @media (max-width: 700px) {
    width: 100%;
    max-width: 555px;
    align-items: center;
  } ;
`

export const FormContainer = styled.form`
  width: 47rem;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  gap: 1.6rem;
  font-size: 1.6rem;
  font-weight: bold;

  a {
    text-decoration: none;
  }

  @media (max-width: 700px) {
    max-width: 505px;
    width: 10rem;
    align-items: center;
  } ;
`
export const InputContainer = styled.input`
  width: 45rem;
  color: ${(props) => props.theme['blue-black']};
  height: 3.8rem;
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

  @media (max-width: 700px) {
    max-width: 450px;

    align-items: center;
  } ;
`

export const ButtonContainer = styled.button`
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

  @media (max-width: 700px) {
    max-width: 450px;

    align-items: center;
  } ;
`
