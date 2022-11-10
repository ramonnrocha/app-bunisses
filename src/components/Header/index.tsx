import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import logoLogin from '../../assets/logo-loginpage.svg'
import { Cardholder, Users } from 'phosphor-react'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={logoLogin} alt="" />
        <nav>
          <NavLink to="/" end title="Timer">
            <Cardholder />
            Assinar
          </NavLink>
          <NavLink to="/history">
            <Users />
            Convide seu time
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  )
}
