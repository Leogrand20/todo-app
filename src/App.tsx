import { TodoForm } from './components/Todos/TodoForm'
import { TodosActions } from './components/Todos/TodosActions'
import { TodoList } from './components/Todos/TodoList'
import { useTodos } from './zustand/store'
import './App.css'

export const App = () => {
  const todos = useTodos((state) => state.todos)

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

      <TodoList />

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
