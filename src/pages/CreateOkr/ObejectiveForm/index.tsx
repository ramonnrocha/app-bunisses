import { useFormContext } from 'react-hook-form'
import {
  DivContainerForm,
  FormContainer,
  InputContainer,
  PrivateContainer,
} from '../styles'

export function ObjectiveForm() {
  const { register } = useFormContext()
  return (
    <FormContainer>
      <InputContainer
        type="text"
        id="obejctive"
        placeholder="Objetivo*"
        {...register('objective')}
      />
      <datalist id="task-suggestions">
        <option value="Comercial"></option>
        <option value="Financeiro"></option>
        <option value="Operacional"></option>
        <option value="Desenvolvimento"></option>
      </datalist>
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
            {...register('dadObjective')}
          />
          <InputContainer
            list="task-suggestions"
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
            <button className="check"></button>
          </div>
          Publico
          <div>
            <button></button>
          </div>
          Privado
        </div>
      </PrivateContainer>
    </FormContainer>
  )
}
