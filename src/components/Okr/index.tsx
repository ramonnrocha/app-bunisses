import { Wrench } from 'phosphor-react'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { Avatar } from '../Avatar'
import {
  EditorOkrContainer,
  OkrDetailsContainer,
  OkrSpreedContainer,
  ProgressDetailsContainer,
} from './styles'

export function Okr() {
  const { objectives } = useContext(CyclesContext)

  return (
    <>
      {objectives.map((objective) => {
        return (
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
        )
      })}
    </>
  )
}