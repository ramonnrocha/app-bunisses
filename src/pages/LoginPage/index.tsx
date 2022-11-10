import {
  ButtonContainer,
  CheckBox,
  CheckContainer,
  FooterContainer,
  FormContainer,
  InputContainer,
  LoginPageContainer,
} from './styles'

import logoLogin from '../../assets/logo-loginpage.svg'
import { SignIn } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function LoginPage() {
  return (
    <LoginPageContainer>
      <img src={logoLogin} alt="" />
      <FormContainer>
        <label htmlFor="">Endereço de e-mail</label>
        <InputContainer type="text" id="email" placeholder="Digite seu email" />
        <label htmlFor="">Sua senha</label>
        <InputContainer type="password" placeholder="Digite sua Senha" />
        <CheckContainer>
          <CheckBox />
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
        <a href="">Esqueceu sua senha ? </a>
        <NavLink to="/register" end title="Register">
          <a href="">Não possui conta ? Crie uma agora!</a>
        </NavLink>
      </FooterContainer>
    </LoginPageContainer>
  )
}
