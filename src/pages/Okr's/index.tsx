import { Cardholder, ClipboardText, Target, Wrench } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Avatar } from '../../components/Avatar'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'

import {
  EditorOkrContainer,
  OkrDetailsContainer,
  OkrSpreedContainer,
  ProgressDetailsContainer,
  DivBarContainerOkr,
  MyOkrsContainer,
  OrksContainer,
} from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'

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
            <OkrSpreedContainer key={objective.id}>
              <Avatar />
              <OkrDetailsContainer>
                <strong>{objective.objective}</strong>
                <div className="details">
                  <p>
                    Responsável: <span>{objective.author}</span>
                  </p>
                  <p>
                    Periodo: <span>1 mês</span>
                  </p>
                </div>
              </OkrDetailsContainer>

              <ProgressDetailsContainer>
                <strong>Progresso</strong>
                <div className="barProgress">
                  <div className="cover">50%</div>
                </div>
              </ProgressDetailsContainer>
              <EditorOkrContainer>
                <button title="Ações">
                  <Wrench size={20} />
                </button>
                <button title="Adicionar Resultado">
                  <p> + Resultado Chave</p>
                </button>
              </EditorOkrContainer>
            </OkrSpreedContainer>
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
