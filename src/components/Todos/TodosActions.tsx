import { FC } from 'react'
import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri'

import { Button } from '../UI/Button'
import { TodosActionsProps } from '../../types/Todo'

import styles from './TodosActions.module.css'

export const TodosActions: FC<TodosActionsProps> = ({
  completedTodosExist,
}) => {
  return (
    <div className={styles['todosActionsContainer']}>
      <Button title="Reset Todos">
        <RiRefreshLine />
      </Button>

      <Button title="Delete Completed Todos" disabled={!completedTodosExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}
