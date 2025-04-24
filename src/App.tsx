import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TodoForm } from './components/Todos/TodoForm'
import { TodosActions } from './components/Todos/TodosActions'
import { TodoList } from './components/Todos/TodoList'

import { ID, Todo } from './types/Todo'

import './App.css'

export const App = () => {
  const [todos, setTodos] = useState<Todo[] | []>([])

  const addTodoHandler = (text: string) => {
    const newTodo = {
      text,
      id: uuidv4(),
      isCompleted: false,
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodo = (todoId: ID) => {
    setTodos(todos.filter(({ id }) => id !== todoId))
  }

  return (
    <>
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodoHandler} />
      <TodosActions />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  )
}
