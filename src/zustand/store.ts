import { create } from 'zustand/react'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { Todos, Todo } from '../types/Todo'

type TodoState = {
  todos: Todos
  addTodoHandler: (text: string) => void
  deleteTodoHandler: (todoId: string) => void
  toggleTodoHandler: (todoId: string) => void
  deleteCompletedTodosHandler: () => void
  resetTodosHandler: () => void
}

export const useTodos = create<TodoState>()(
  devtools(
    immer((set) => ({
      todos: [] as Todos,

      addTodoHandler: (text: string) =>
        set(
          (state) => {
            const newTodo = {
              text,
              id: uuidv4(),
              isCompleted: false,
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
                ? { ...todo, isCompleted: !todo.isCompleted }
                : { ...todo }
            )
          },
          false,
          'toggleTodo'
        ),

      deleteCompletedTodosHandler: () =>
        set(
          (state) => {
            state.todos = state.todos.filter(({ isCompleted }) => !isCompleted)
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
    })),
    { name: 'Todos' }
  )
)
