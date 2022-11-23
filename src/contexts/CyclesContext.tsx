import { createContext, ReactNode, useState } from 'react'

interface CreateObjectiveData {
  what: string
  where: string
  why: string
  when: string
  who: string
  how: string
  howMuch: string
  objective: string
  description: string
  author: string
  function: string
  dadObjective: string
  sector: string
}
interface ActionPlan {
  what: string
  where: string
  why: string
  when: string
  who: string
  how: string
  howMuch: string
}

interface Objetive {
  id: string
  objective: string
  description: string
  author: string
  function: string
  dadObjective: string
  sector: string
  visibilty?: string
  submit: boolean
  actionPlan: ActionPlan[]
}

interface OkrContextType {
  objectives: Objetive[]
  plan: ActionPlan[]
  CreateNewObjective: (data: CreateObjectiveData) => void
}

interface OkrContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as OkrContextType)

export function OkrContextProvider({ children }: OkrContextProviderProps) {
  const [objectives, setObjectives] = useState<Objetive[]>([])
  const [plan, setPlan] = useState<ActionPlan[]>([])

  function CreateNewObjective(data: CreateObjectiveData) {
    const id = String(new Date().getTime())
    const newPlan: ActionPlan = {
      what: data.what,
      where: data.where,
      why: data.why,
      when: data.when,
      who: data.who,
      how: data.how,
      howMuch: data.howMuch,
    }
    setPlan((state) => [...state, newPlan])
    const newObjective: Objetive = {
      id,
      objective: data.objective,
      description: data.description,
      author: data.author,
      function: data.function,
      dadObjective: data.dadObjective,
      sector: data.dadObjective,
      submit: true,
      actionPlan: [newPlan],
    }

    setObjectives((state) => [...state, newObjective])
    console.log(newObjective)
  }

  return (
    <CyclesContext.Provider
      value={{
        objectives,
        CreateNewObjective,
        plan,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
