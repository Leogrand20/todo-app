import { AnimatePresence, motion } from 'framer-motion'
import { TodoItem } from './TodoItem'
import { useTodos } from '../../zustand/store'
import styles from './TodoList.module.css'

export const TodoList = () => {
  const todos = useTodos((state) => state.todos)
  
  return (
    <div className={styles['todoListContainer']}>
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            className={styles['todoWrapper']} // 👈 Добавим класс!
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <TodoItem key={todo.id} {...todo} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
