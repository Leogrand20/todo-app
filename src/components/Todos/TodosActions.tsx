import { FC } from 'react'
import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri'

import { Button } from '../UI/Button'
import { TodosActionsProps } from '../../types/Todo'

import styles from './TodosActions.module.css'
import { useTodos } from '../../zustand/store'

export const TodosActions: FC<TodosActionsProps> = ({
  completedTodosExist,
  resetTodos,
}) => {
  const deleteCompletedTodos = useTodos(
    (state) => state.deleteCompletedTodosHandler
  )

  return (
    <div className={styles['todosActionsContainer']}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>

      <Button
        title="Delete Completed Todos"
        disabled={!completedTodosExist}
        onClick={deleteCompletedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}
