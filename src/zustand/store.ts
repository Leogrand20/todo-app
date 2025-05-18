import { create } from 'zustand/react'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { Todos, Todo } from '../types/Todo'

type TodoState = {
  todos: Todos
  addTodoHandler: (title: string) => void
  deleteTodoHandler: (todoId: string) => void
  toggleTodoHandler: (todoId: string) => void
  deleteCompletedTodosHandler: () => void
  resetTodosHandler: () => void
  fetchTodoHandler: () => Promise<void>
}

export const useTodos = create<TodoState>()(
  devtools(
    immer((set) => ({
      todos: [] as Todos,

      addTodoHandler: (title: string) =>
        set(
          (state) => {
            const newTodo = {
              title,
              id: uuidv4(),
              completed: false,
            }

            state.todos.push(newTodo)
          },
          false,
          'addTodo'
        ),

      deleteTodoHandler: (todoId: string) =>
        set(
          (state) => {
            state.todos = state.todos.filter((todo: Todo) => todo.id !== todoId)
          },
          false,
          'deleteTodo'
        ),

      toggleTodoHandler: (todoId: string) =>
        set(
          (state) => {
            state.todos = state.todos.map((todo: Todo) =>
              todo.id === todoId
                ? { ...todo, completed: !todo.completed }
                : { ...todo }
            )
          },
          false,
          'toggleTodo'
        ),

      deleteCompletedTodosHandler: () =>
        set(
          (state) => {
            state.todos = state.todos.filter(({ completed }) => !completed)
          },
          false,
          'deleteCompletedTodos'
        ),

      resetTodosHandler: () =>
        set(
          (state) => {
            state.todos = []
          },
          false,
          'resetTodos'
        ),

      fetchTodoHandler: async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = (await res.json()) as Todo

        console.log(data)

        set(
          (state) => {
            const newTodo = {
              id: String(data.id),
              title: data.title,
              completed: data.completed,
            }

            state.todos.push(newTodo)
          },
          false,
          'fetchTodo'
        )
      },
    })),
    { name: 'Todos' }
  )
)
