import { TodoItem } from './TodoItem'
import styles from './TodoList.module.css'

export const TodoList = ({ todo }) => {
  return (
    <div className={styles['todoListContainer']}>
      <TodoItem {...todo} />
    </div>
  )
}
