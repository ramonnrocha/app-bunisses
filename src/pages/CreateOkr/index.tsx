import { CaretDown, ChartLineUp, Target, Upload } from 'phosphor-react'

import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { ButtonContainer, DivBarContainer, OkrContainer } from './styles'

import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { ObjectiveForm } from './ObejectiveForm'
import { CyclesContext } from '../../contexts/CyclesContext'
import { PlanForm } from './PlanForm'

const newObjectiveFormValidationSchema = zod.object({
  objective: zod.string().min(1, 'Informe uma tarefa'),
  description: zod.string().min(1, 'Descreva o objetivo'),
  author: zod.string().min(1),
  function: zod.string().min(1),
  dadObjective: zod.string(),
  sector: zod.string(),
  what: zod.string(),
  where: zod.string(),
  why: zod.string(),
  when: zod.string(),
  who: zod.string(),
  how: zod.string(),
  howMuch: zod.string(),
})

type NewObjectiveFormData = zod.infer<typeof newObjectiveFormValidationSchema>

export function CreateOkr() {
  const { CreateNewObjective } = useContext(CyclesContext)
  const newObjectiveForm = useForm<NewObjectiveFormData>({
    resolver: zodResolver(newObjectiveFormValidationSchema),
  })

  const { handleSubmit, reset } = newObjectiveForm

  function handleCreateNewObjective(data: NewObjectiveFormData) {
    CreateNewObjective(data)
    reset()
  }

  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <OkrContainer>
        <DivBarContainer>
          <Target size={32} />
          Novo Objetivo
        </DivBarContainer>
        <form onSubmit={handleSubmit(handleCreateNewObjective)} action="">
          <FormProvider {...newObjectiveForm}>
            <ObjectiveForm />

            <DivBarContainer>
              <ChartLineUp size={32} />
              Plano de Ação
              <button>
                <CaretDown size={24} />
              </button>
            </DivBarContainer>
            <PlanForm></PlanForm>
            <ButtonContainer type="submit">
              <Upload />
              Salvar
            </ButtonContainer>
          </FormProvider>
        </form>
      </OkrContainer>
    </>
  )
}
