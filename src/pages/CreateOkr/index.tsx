import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { ButtonContainer, DivBarContainer, OkrContainer } from './styles'

import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { ObjectiveForm } from './ObejectiveForm'
import { CyclesContext } from '../../contexts/CyclesContext'

import { redirect } from 'react-router-dom'
import { Target, Upload } from 'phosphor-react'

const newObjectiveFormValidationSchema = zod.object({
  objective: zod.string().min(1, 'Informe uma tarefa'),
  description: zod.string().min(1, 'Descreva o objetivo'),
  author: zod.string().min(1),
  function: zod.string().min(1),
  dadObjective: zod.string(),
  sector: zod.string().min(1),
  what: zod.string().min(1),
  where: zod.string().min(1),
  why: zod.string().min(1),
  when: zod.string().min(1),
  who: zod.string().min(1),
  how: zod.string().min(1),
  howMuch: zod.string().min(1),
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
    redirect('/okrs')
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
