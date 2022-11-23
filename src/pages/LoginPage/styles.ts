import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  height: 80rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.4rem;

  @media (max-width: 700px) {
    width: 555px;
  } ;
`

export const FormContainer = styled.form`
  width: 47rem;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: bold;

  a {
    text-decoration: none;
  }
  @media (max-width: 700px) {
    width: 505px;
    align-items: center;
    justify-content: center;
  } ;
`
export const InputContainer = styled.input`
  width: 45rem;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  border: solid 1px ${(props) => props.theme['icon-details']};
  border-radius: 8px;
  background-color: transparent;
  color: ${(props) => props.theme['icon-details']};
  font-size: 1.6rem;
  outline: none;

  ::placeholder {
    color: ${(props) => props.theme['icon-details']};
  }

  @media (max-width: 700px) {
    width: 400px;
  } ;
`

export const CheckContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1rem;
  font-size: 1.6rem;

  button {
    background-color: transparent;
    width: 2rem;
    height: 2rem;
    border: 1px solid;
    border-radius: 999px;
    cursor: pointer;
    overflow: hidden;
    align-items: center;
  }

  svg {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme['blue-linear']};
    color: white;
  }
`
export const CheckBox = styled.div`
  background-color: ${(props) => props.theme['blue-linear']};
  width: 2rem;
  height: 2rem;
  padding: 0;
  margin: 0;
`
export const ButtonContainer = styled.button`
  margin-left: -1.6rem;
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
    width: 400px;
  } ;
`
export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme['icon-details']};
  font-size: 1.6rem;
  gap: 0.8rem;

  a {
    color: ${(props) => props.theme['icon-details']};
    text-decoration: underline;
  }
`
