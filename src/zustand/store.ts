import { toast } from 'react-toastify'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { create } from 'zustand/react'

import { Todo, Todos } from '../types/Todo'
import { createTodoFromSource } from '../utils/createTodoFromSource'

type TodoState = {
  todos: Todos
  addTodoHandler: (title: string) => void
  deleteTodoHandler: (todoId: string) => void
  toggleTodoHandler: (todoId: string) => void
  deleteCompletedTodosHandler: () => void
  resetTodosHandler: () => void
  fetchTodoHandler: () => Promise<void>
}

const randomTodo = (minNum: number, maxNum: number) =>
  Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

export const useTodos = create<TodoState>()(
  devtools(
    immer((set) => ({
      todos: [] as Todos,

      addTodoHandler: (title: string) =>
        set(
          (state) => {
            const newTodo = createTodoFromSource({ title })
            state.todos.push(newTodo)
          },
          false,
          'addTodo',
        ),

      deleteTodoHandler: (todoId: string) =>
        set(
          (state) => {
            state.todos = state.todos.filter(({ id }) => id !== todoId)
          },
          false,
          'deleteTodo',
        ),

      toggleTodoHandler: (todoId: string) =>
        set(
          (state) => {
            const todo = state.todos.find((t) => t.id === todoId)

            if (todo) {
              todo.completed = !todo.completed
            }
          },
          false,
          'toggleTodo',
        ),

      deleteCompletedTodosHandler: () =>
        set(
          (state) => {
            state.todos = state.todos.filter(({ completed }) => !completed)
          },
          false,
          'deleteCompletedTodos',
        ),

      resetTodosHandler: () =>
        set(
          (state) => {
            state.todos = []
          },
          false,
          'resetTodos',
        ),

      fetchTodoHandler: async () => {
        try {
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${randomTodo(1, 200)}`,
          )
          const data = (await res.json()) as Todo

          set(
            (state) => {
              const exists = state.todos.some(({ id }) => id === String(data.id))

              if (exists) {
                toast.warn('Этот todo уже добавлен!')
              } else {
                const newTodo = createTodoFromSource({
                  id: String(data.id),
                  title: data.title,
                  completed: data.completed,
                })
                state.todos.push(newTodo)
              }
            },
            false,
            'fetchTodo',
          )
        } catch (error) {
          toast.error('Ошибка при загрузке todo')
          console.error('Ошибка при загрузке todo:', error)
        }
      },
    })),
    { name: 'Todos' },
  ),
)
