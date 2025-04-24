import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TodoForm } from './components/Todos/TodoForm'
import { TodosActions } from './components/Todos/TodosActions'
import { TodoList } from './components/Todos/TodoList'

import { ID, Todo } from './types/Todo'

import './App.css'
import { TodoContext } from './components/context/TodoContext'

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    const newTodo = {
      text,
      id: uuidv4(),
      isCompleted: false,
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (todoId: ID) => {
    setTodos(todos.filter(({ id }) => id !== todoId))
  }

  const toggleTodoHandler = (todoId: ID) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const quantityCompletedTodos = todos.filter(
    ({ isCompleted }) => isCompleted
  ).length

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter(({ isCompleted }) => !isCompleted))
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  return (
    <>
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodoHandler} />

      <TodosActions
        completedTodosExist={!!quantityCompletedTodos}
        deleteCompletedTodos={deleteCompletedTodosHandler}
        resetTodos={resetTodosHandler}
      />

      <TodoContext.Provider
        value={{ deleteTodo: deleteTodoHandler, toggleTodo: toggleTodoHandler }}
      >
        <TodoList todos={todos} />
      </TodoContext.Provider>

      {!!quantityCompletedTodos && (
        <h2>
          {`You have ${quantityCompletedTodos} completed ${
            quantityCompletedTodos === 1 ? 'todo' : 'todos'
          }`}
        </h2>
      )}
    </>
  )
}
