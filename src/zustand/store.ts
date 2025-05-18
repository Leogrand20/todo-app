import { create } from 'zustand/react'
import { immer } from 'zustand/middleware/immer'
import { v4 as uuidv4 } from 'uuid'
import { Todos, Todo } from '../types/Todo'

type TodoState = {
  todos: Todos
  addTodoHandler: (text: string) => void
  deleteTodoHandler: (todoId: string) => void
}

export const useTodos = create<TodoState>()(
  immer((set, get) => ({
    todos: [] as Todos,

    addTodoHandler: (text: string) =>
      set((state) => {
        const newTodo = {
          text,
          id: uuidv4(),
          isCompleted: false,
        }

        state.todos.push(newTodo)
      }),

    deleteTodoHandler: (todoId: string) =>
      set((state) => {
        state.todos = state.todos.filter((todo: Todo) => todo.id !== todoId)
      }),
  }))
)
