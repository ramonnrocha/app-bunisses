import {
  ButtonContainer,
  FormContainer,
  InputContainer,
  RegisterContaier,
} from './styles'
import logoLogin from '../../assets/logo-loginpage.svg'
import { NavLink } from 'react-router-dom'
import { SignIn } from 'phosphor-react'

export function Register() {
  return (
    <RegisterContaier>
      <img src={logoLogin} alt="" />
      <h4>Cadastre-se e comece a usar agora mesmo!</h4>
      <FormContainer>
        <InputContainer type="text" id="name" placeholder="Nome Completo " />
        <InputContainer type="email" id="email" placeholder="Email" />
        <InputContainer type="phone" id="phone" placeholder="Celular" />
        <InputContainer type="text" id="function" placeholder="Função" />
        <InputContainer
          type="text"
          id="company"
          placeholder="Nome da Empresa"
        />
        <InputContainer type="password" id="password" placeholder="Senha" />

        <NavLink to="/" end title="loginpage">
          <ButtonContainer>
            <SignIn />
            Entrar na Plataforma
          </ButtonContainer>
        </NavLink>
      </FormContainer>
    </RegisterContaier>
  )
}
