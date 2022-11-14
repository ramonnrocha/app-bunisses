import { CaretUp, ChartLineUp, Target, Upload } from 'phosphor-react'

import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import {
  ButtonContainer,
  DivBarContainer,
  DivContainerForm,
  FormContainer,
  InputContainer,
  OkrContainer,
  PrivateContainer,
} from './styles'

export function CreateOkr() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <OkrContainer>
        <DivBarContainer>
          <Target size={32} />
          Novo Objetivo
        </DivBarContainer>
        <FormContainer>
          <InputContainer type="text" id="obejct" placeholder="Objetivo*" />
          <InputContainer
            type="text"
            id="description"
            placeholder="Descrição*"
          />
          <DivContainerForm>
            <div>
              <InputContainer type="text" id="name" placeholder="Responsável" />
              <InputContainer
                type="text"
                id="function"
                placeholder="Contribuintes"
              />
            </div>
            <div>
              <InputContainer
                type="text"
                id="object"
                placeholder="Objetivo pai"
              />
              <InputContainer type="text" id="text" placeholder="Diretriz*" />
            </div>
          </DivContainerForm>

          <PrivateContainer>
            <h4>Privacidade</h4>
            <div>
              <div>
                <button></button>
              </div>
              Publico
              <div>
                <button></button>
              </div>
              Privado
            </div>
          </PrivateContainer>

          <ButtonContainer>
            <Upload />
            Salvar
          </ButtonContainer>
        </FormContainer>
        <DivBarContainer>
          <ChartLineUp size={32} />
          Plano de Ação
          <button>
            <CaretUp size={24} />
          </button>
        </DivBarContainer>
      </OkrContainer>
    </>
  )
}
