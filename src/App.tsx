import { useTodos } from './zustand/store'
import { TodoForm } from './components/Todos/TodoForm'
import { TodosActions } from './components/Todos/TodosActions'
import { TodoList } from './components/Todos/TodoList'
import './App.css'

export const App = () => {
  const todos = useTodos((state) => state.todos)

  const quantityCompletedTodos = todos.filter(
    ({ isCompleted }) => isCompleted
  ).length

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm />

      <TodosActions completedTodosExist={!!quantityCompletedTodos} />

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
