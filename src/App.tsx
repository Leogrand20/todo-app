import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TodoForm } from './components/Todos/TodoForm'
import { TodosActions } from './components/Todos/TodosActions'
import { TodoList } from './components/Todos/TodoList'

import { Todo } from './types/Todo'

import './App.css'
import { useTodos } from './zustand/store'

export const App = () => {
  const todos = useTodos((state) => state.todos)
  const addTodo = useTodos((state) => state.addTodoHandler)
  const deleteTodo = useTodos((state) => state.deleteTodoHandler)

  const deleteTodoHandler = (todoId: string) => {
    setTodos(todos.filter(({ id }) => id !== todoId))
  }

  const toggleTodoHandler = (todoId: string) => {
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

      <TodoForm />

      <TodosActions
        completedTodosExist={!!quantityCompletedTodos}
        deleteCompletedTodos={deleteCompletedTodosHandler}
        resetTodos={resetTodosHandler}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />

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
