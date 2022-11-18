import { Cardholder, ClipboardText, Target } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { Okr } from '../../components/Okr'
import { CyclesContext } from '../../contexts/CyclesContext'

import { DivBarContainerOkr, MyOkrsContainer, OrksContainer } from './styles'

export function Orks() {
  const { objectives } = useContext(CyclesContext)
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

        <MyOkrsContainer>
          {objectives.map((objective) => (
            <Okr key={objective.id} />
          ))}
        </MyOkrsContainer>

        <div className="noTasks">
          {objectives.length <= 0 && (
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
