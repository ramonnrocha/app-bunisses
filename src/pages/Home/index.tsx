import { PencilLine } from 'phosphor-react'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'

import {
  CoverContainer,
  HomeContainer,
  ProfileContainer,
  SidebarContainer,
} from './styles'

export function Home() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <HomeContainer>
        <SidebarContainer>
          <CoverContainer></CoverContainer>

          <ProfileContainer>
            <img src="https://github.com/ramonnrocha.png" alt="avatar" />
            <strong>Ramonn Rocha</strong>
            <span>Developer Junior</span>
            <span>Empresa Nome</span>
          </ProfileContainer>

          <footer>
            <a href="#">
              <PencilLine size={20} />
              Editar seu Perfil
            </a>
          </footer>
        </SidebarContainer>
      </HomeContainer>
    </>
  )
}
