import { Calendar, ClipboardText, PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { ContentContainer } from '../../styles/global'
import { DivBarContainerOkr } from "../Okr's/styles"
import { FormTasksContainer, HomeTaskContainer } from './styles'
import { Task } from './Task'

export interface ITask {
  id: string
  title: string
  isCompleted: boolean
}

interface Props {
  tasks: ITask[]
  onAddTask: (taskTitle: string) => void
  onDeleteTask: (taskId: string) => void
  onCompletedTask: (taskId: string) => void
}

export function Tasks({ onAddTask, onDeleteTask, onCompletedTask }: Props) {
  const [title, setTiTle] = useState('')
  const [tasks, setTasks] = useState<ITask[]>([])

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(newTasks)
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  function handleSubimit(event: FormEvent) {
    event?.preventDefault()

    addTask(title)
    setTiTle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLTextAreaElement>) {
    setTiTle(event.target.value)
  }

  const taskQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <ContentContainer>
        <DivBarContainerOkr>
          <div>
            <Calendar size={32} />
            Minhas Tarefas
          </div>
        </DivBarContainerOkr>
        <FormTasksContainer>
          <form onSubmit={handleSubimit}>
            <textarea
              onChange={onChangeTitle}
              value={title}
              required
              placeholder="Adicione uma nova tarefa"
            />
            <button className="button" type="submit">
              Criar
              <PlusCircle size={24} />
            </button>
          </form>
        </FormTasksContainer>

        <HomeTaskContainer>
          <header>
            <div className="created">
              Tarefas Criadas <span>{taskQuantity}</span>
            </div>
            <div className="completed">
              Concluidas <span>{completedTasks}</span> de{' '}
              <span>{tasks.length}</span>
            </div>
          </header>
          <div className="hometasks">
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onDelete={deleteTaskById}
                onCompletedTask={toggleTaskCompletedById}
              />
            ))}

            {tasks.length <= 0 && (
              <div className="noTasks">
                <ClipboardText size={80} />
                <div>
                  <h4>Você ainda não tem tarefas cadastradas</h4>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </div>
            )}
          </div>
        </HomeTaskContainer>
      </ContentContainer>
    </>
  )
}
