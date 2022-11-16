import { Cardholder, ClipboardText, Target } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'

import { DivBarContainerOkr, OrksContainer } from './styles'

const tasks = []

export function Orks() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <OrksContainer>
        <DivBarContainerOkr>
          <div>
            <Target size={32} />
            Meus OKRs
          </div>

          <div>
            <NavLink to="/create-okr" end title="Create">
              <Cardholder />
              Criar OKR
            </NavLink>
          </div>
        </DivBarContainerOkr>
        <div className="noTasks">
          {tasks.length <= 0 && (
            <div>
              <ClipboardText size={80} />
              <div>
                <h4>Você ainda não tem tarefas cadastradas</h4>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )}
        </div>
      </OrksContainer>
    </>
  )
}
