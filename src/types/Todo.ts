export interface Todo {
  text: string
  id: string
  isCompleted: boolean
}

export type Todos = Todo[]

export type TodoFormProps = {
  addTodo: (value: string) => void
}

export type TodoListProps = {
  todos: Todo[]
  deleteTodo: (todoId: string) => void
  toggleTodo: (todoId: string) => void
}

export type TodosActionsProps = {
  completedTodosExist: boolean
  deleteCompletedTodos: () => void
  resetTodos: () => void
}
