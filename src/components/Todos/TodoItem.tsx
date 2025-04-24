import { FC } from 'react'
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa6'
import { motion } from 'motion/react'

import { TodoItemProps } from '../../types/Todo'

import styles from './TodoItem.module.css'

export const TodoItem: FC<TodoItemProps> = ({ id, text, isCompleted }) => {
  return (
    <motion.div
      initial={{ transform: 'translateY(-150px)', opacity: 0, scale: 0 }}
      animate={{ transform: 'translateY(0px)', opacity: 1, scale: 1 }}
      transition={{ type: 'spring', duration: 1.5, ease: 'easeInOut' }}
      exit={{ transform: 'translateY(150px)', opacity: 0, scale: 0 }}
      className={styles['todo']}
    >
      <RiTodoFill className={styles['todoIcon']} />

      <div className={styles['todoText']}>{text}</div>

      <RiDeleteBin2Line className={styles['deleteIcon']} />
      <FaCheck className={styles['checkIcon']} />
    </motion.div>
  )
}
