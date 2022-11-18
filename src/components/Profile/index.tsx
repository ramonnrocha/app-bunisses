import { PencilLine } from 'phosphor-react'
import {
  CoverContainer,
  ProfileContainer,
  SidebarContainer,
} from '../../pages/Home/styles'

export function Profile() {
  return (
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
  )
}
