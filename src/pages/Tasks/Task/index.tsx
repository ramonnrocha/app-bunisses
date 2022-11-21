import { Trash, Check } from 'phosphor-react'
import { ITask } from '..'

import { TasksContainer } from './styles'

interface Props {
  task: ITask
  onDelete: (taskId: string) => void
  onCompletedTask: (taskId: string) => void
}

export function Task({ task, onDelete, onCompletedTask }: Props) {
  return (
    <TasksContainer>
      <div className="customcheckbox">
        <button
          onClick={() => onCompletedTask(task.id)}
          className="checkContainer"
        >
          {task.isCompleted ? <Check /> : <div />}
        </button>
      </div>
      <p className={task.isCompleted ? 'textCompleted' : ''}>{task.title}</p>
      <button onClick={() => onDelete(task.id)} title="Deletar Comentário">
        <Trash size={20} />
      </button>
    </TasksContainer>
  )
}
