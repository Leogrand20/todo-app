import { FC, memo } from 'react'
import { FaCheck } from 'react-icons/fa6'
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'

import { TodoItemProps } from '../../types/Todo'
import { useTodos } from '../../zustand/store'

import styles from './TodoItem.module.css'

export const TodoItem: FC<TodoItemProps> = memo(({ id, title, completed }) => {
  const deleteTodo = useTodos((state) => state.deleteTodoHandler)
  const toggleTodo = useTodos((state) => state.toggleTodoHandler)

  return (
    <div
      className={`${styles['todo']} ${
        completed ? styles['completedTodo'] : ''
      }`}
    >
      <RiTodoFill className={styles['todoIcon']} />

      <div className={styles['todoText']}>{title}</div>

      <RiDeleteBin2Line
        className={styles['deleteIcon']}
        onClick={() => deleteTodo(String(id))}
      />

      <FaCheck
        className={styles['checkIcon']}
        onClick={() => toggleTodo(String(id))}
      />
    </div>
  )
})
