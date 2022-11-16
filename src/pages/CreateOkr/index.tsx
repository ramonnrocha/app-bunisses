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

import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'
import { useForm } from 'react-hook-form'

const newObjectFormValidationSchema = zod.object({
  object: zod.string().min(1, 'Informe uma tarefa'),
  description: zod.string().min(1, 'Descreva o objetivo'),
  author: zod.string().min(1),
  function: zod.string().min(1),
  dadObject: zod.string(),
  sector: zod.string(),
})

type NewObjectFormData = zod.infer<typeof newObjectFormValidationSchema>

export function CreateOkr() {
  const newCycleForm = useForm<NewObjectFormData>({
    resolver: zodResolver(newObjectFormValidationSchema),
  })

  const { register, handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: any) {
    console.log(data)
    reset()
  }

  const object = watch('object')
  const isSubmitDisabled = !object

  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <OkrContainer>
        <DivBarContainer>
          <Target size={32} />
          Novo Objetivo
        </DivBarContainer>

        <FormContainer onSubmit={handleSubmit(handleCreateNewCycle)} action="">
          <InputContainer
            type="text"
            id="obejct"
            placeholder="Objetivo*"
            role="listbox"
            {...register('object')}
          />
          <InputContainer
            type="text"
            id="description"
            placeholder="Descrição*"
            {...register('description')}
          />
          <DivContainerForm>
            <div>
              <InputContainer
                type="text"
                id="name"
                placeholder="Responsável"
                {...register('author')}
              />
              <InputContainer
                type="text"
                id="function"
                placeholder="Contribuintes"
                {...register('function')}
              />
            </div>
            <div>
              <InputContainer
                type="text"
                id="object"
                placeholder="Objetivo pai"
                {...register('dadObject')}
              />
              <InputContainer
                type="text"
                id="text"
                placeholder="Diretriz*"
                {...register('sector')}
              />
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

          <ButtonContainer disabled={isSubmitDisabled} type="submit">
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
