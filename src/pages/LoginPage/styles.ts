import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  height: 80rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.4rem;
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
`

export const CheckContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1.6rem;
  font-size: 1.6rem;
`
export const CheckBox = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid;
  border-radius: 5px;
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
