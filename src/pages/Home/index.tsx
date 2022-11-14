import { PencilLine } from 'phosphor-react'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'

import {
  CoverContainer,
  HomeContainer,
  OkrsInfoContainer,
  ProfileContainer,
  SidebarContainer,
  Status,
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
        <OkrsInfoContainer>
          <table>
            <thead>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </thead>
            <tbody>
              <tr>
                <td>OKR 1</td>
                <td>1 mes</td>
                <td>agosto</td>
                <td>
                  <Status statusColor="green">Concluido</Status>
                </td>
              </tr>
              <tr>
                <td>OKR 2</td>
                <td>Uma semana</td>
                <td>agosto</td>
                <td>
                  <Status statusColor="yellow">Em Andamento</Status>
                </td>
              </tr>
              <tr>
                <td>OKR 3</td>
                <td>há 1 minutos</td>
                <td>agosto</td>
                <td>
                  <Status statusColor="red">Atrasado</Status>
                </td>
              </tr>
            </tbody>
          </table>
        </OkrsInfoContainer>
      </HomeContainer>
    </>
  )
}
