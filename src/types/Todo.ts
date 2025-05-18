export interface Todo {
  text: string
  id: string
  isCompleted: boolean
}

export type TodoItemProps = Todo

export type Todos = Todo[]

export type TodoFormProps = {
  addTodo: (value: string) => void
}

export type TodosActionsProps = {
  completedTodosExist: boolean
  resetTodos: () => void
}
