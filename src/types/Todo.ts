export type ID = string | number

export interface Todo {
  text: string
  id: ID
  isCompleted: boolean
}

export type TodoFormProps = {
  addTodo: (value: string) => void
}

export type TodoListProps = {
  todos: Todo[]
}

export type TodoItemProps = Todo

export type TodosActionsProps = {
  completedTodosExist: boolean
  deleteCompletedTodos: () => void
  resetTodos: () => void
}
