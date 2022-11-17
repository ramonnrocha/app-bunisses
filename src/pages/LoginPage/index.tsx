import {
  ButtonContainer,
  CheckContainer,
  FooterContainer,
  FormContainer,
  InputContainer,
  LoginPageContainer,
} from './styles'

import logoLogin from '../../assets/logo-loginpage.svg'
import { Check, SignIn } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

interface PropsLoginPage {
  check: boolean
}

export function LoginPage({ check }: PropsLoginPage) {
  const [checks, setChecks] = useState(false)

  function handleCheckBox(check: boolean, event: any) {
    setChecks(true)
    console.log(checks)
    event.preventDefault()
  }

  return (
    <LoginPageContainer>
      <img src={logoLogin} alt="" />
      <FormContainer>
        <label htmlFor="">Endereço de e-mail</label>
        <InputContainer type="text" id="email" placeholder="Digite seu email" />
        <label htmlFor="">Sua senha</label>
        <InputContainer
          type="current-password"
          placeholder="Digite sua Senha"
        />
        <CheckContainer>
          <button onClick={() => handleCheckBox(check, event)}>
            {checks ? <Check /> : ''}
          </button>

          <strong>Lembra de mim por 30 dias</strong>
        </CheckContainer>
      </FormContainer>
      <NavLink to="/home" end title="home">
        <ButtonContainer>
          <SignIn />
          Entrar na Plataforma
        </ButtonContainer>
      </NavLink>
      <FooterContainer>
        <NavLink to={''}>
          <p>Esqueceu sua senha ?</p>
        </NavLink>
        <NavLink to="/register" end title="Register">
          <p>Não possui conta ? Crie uma agora!</p>
        </NavLink>
      </FooterContainer>
    </LoginPageContainer>
  )
}
