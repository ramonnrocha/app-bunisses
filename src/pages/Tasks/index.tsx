import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { HomeContainer, OkrsInfoContainer, Status } from '../Home/styles'

export function Tasks() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <HomeContainer>
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
