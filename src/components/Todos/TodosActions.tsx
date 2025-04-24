import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri'

import { Button } from '../UI/Button'

import styles from './TodosActions.module.css'

export const TodosActions = () => {
  return (
    <div className={styles['todosActionsContainer']}>
      <Button title="Reset Todos">
        <RiRefreshLine />
      </Button>

      <Button title="Delete Completed Todos">
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}
