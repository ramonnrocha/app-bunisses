import { CaretDown, ChartLineUp } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  DivBarContainer,
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
      <DivBarContainer>
        <ChartLineUp size={32} />
        Plano de Ação
        <button>
          <CaretDown size={24} />
        </button>
      </DivBarContainer>
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
