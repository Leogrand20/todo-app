import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TodoForm } from './components/Todos/TodoForm'

import './App.css'
import { Todo } from './types/Todo'
import { TodoList } from './components/Todos/TodoList'
import { TodosActions } from './components/Todos/TodosActions'

export const App = () => {
  const [todos, setTodo] = useState<Todo[] | []>([])

  const addTodoHandler = (text: string) => {
    const newTodo = {
      text,
      id: uuidv4(),
      isCompleted: false,
    }

    setTodo([...todos, newTodo])
  }

  return (
    <>
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodoHandler} />
      <TodosActions />
      <TodoList todos={todos} />
    </>
  )
}
