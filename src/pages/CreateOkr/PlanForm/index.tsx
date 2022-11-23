import { useFormContext } from 'react-hook-form'
import { DivContainerForm, FormContainer, InputContainer } from '../styles'

export function PlanForm() {
  const { register } = useFormContext()
  return (
    <FormContainer>
      <InputContainer
        type="text"
        id="obejctive"
        placeholder="O que será feito ? *"
        {...register('what')}
      />

      <InputContainer
        type="text"
        id="description"
        placeholder="Porquê?"
        {...register('why')}
      />
      <InputContainer
        type="text"
        id="description"
        placeholder="Onde será feito?"
        {...register('where')}
      />
      <DivContainerForm>
        <div>
          <InputContainer
            type="text"
            id="name"
            placeholder="Quando ?"
            {...register('when')}
          />
          <InputContainer
            type="text"
            id="function"
            placeholder="Por quem será feito ?"
            {...register('who')}
          />
        </div>
        <div>
          <InputContainer
            type="text"
            id="object"
            placeholder="Como será feito ?"
            {...register('how')}
          />
          <InputContainer
            list="task-suggestions"
            type="text"
            id="text"
            placeholder="Quanto custará ?"
            {...register('howMuch')}
          />
        </div>
      </DivContainerForm>
    </FormContainer>
  )
}
