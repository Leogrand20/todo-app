import { useState } from 'react'
import './App.css'
import { TodoForm } from './components/Todos/TodoForm'

export const App = () => {
  const [todo, setTodo] = useState('')

  return (
    <>
      <h1>Todo App</h1>

      <TodoForm />
    </>
  )
}
