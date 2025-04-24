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
  deleteTodo: (todoId: ID) => void
  toggleTodo: (todoId: ID) => void
}

export interface TodoItemProps extends Todo {
  deleteTodo: TodoListProps['deleteTodo']
  toggleTodo: TodoListProps['toggleTodo']
}

export type TodosActionsProps = {
  completedTodosExist: boolean
  deleteCompletedTodos: () => void
  resetTodos: () => void
}
