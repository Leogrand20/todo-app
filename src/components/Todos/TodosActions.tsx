import { FC } from 'react'
import { HiArrowDown } from 'react-icons/hi2'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

import { TodosActionsProps } from '../../types/Todo'
import { useTodos } from '../../zustand/store'
import { Button } from '../UI/Button'

import styles from './TodosActions.module.css'

export const TodosActions: FC<TodosActionsProps> = ({ completedTodosExist }) => {
  const deleteCompletedTodos = useTodos((state) => state.deleteCompletedTodosHandler)
  const resetTodos = useTodos((state) => state.resetTodosHandler)
  const fetchTodo = useTodos((state) => state.fetchTodoHandler)

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

      <Button title="Fetch Random Todo" onClick={fetchTodo}>
        <HiArrowDown />
      </Button>
    </div>
  )
}
