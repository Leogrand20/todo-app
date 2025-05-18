import { TodoItem } from './TodoItem'
import { useTodos } from '../../zustand/store'
import styles from './TodoList.module.css'

export const TodoList = () => {
  const todos = useTodos((state) => state.todos)
  return (
    <div className={styles['todoListContainer']}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  )
}
