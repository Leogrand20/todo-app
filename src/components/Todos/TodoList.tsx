import { FC } from 'react'

import { TodoItem } from './TodoItem'
import { TodoListProps } from '../../types/Todo'

import styles from './TodoList.module.css'

export const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div className={styles['todoListContainer']}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  )
}
