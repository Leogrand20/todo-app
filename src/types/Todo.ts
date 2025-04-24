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
}

export type TodoItemProps = {
  text: Todo['text']
  id: ID
  isCompleted: Todo['isCompleted']
  deleteTodo: TodoListProps['deleteTodo']
}

export type TodosActionsProps = {}
