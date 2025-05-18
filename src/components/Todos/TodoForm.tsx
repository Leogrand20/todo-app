import { FormEvent, useState } from 'react'

import { Button } from '../UI/Button'

import styles from './TodoForm.module.css'
import { useTodos } from '../../zustand/store'

export const TodoForm = () => {
  const [text, setText] = useState('')
  const addTodo = useTodos((state) => state.addTodoHandler)

  const handlSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addTodo(text)

    setText('')
  }

  return (
    <div className={styles['todoFormContainer']}>
      <form onSubmit={handlSubmit} className="my-4">
        <input
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
