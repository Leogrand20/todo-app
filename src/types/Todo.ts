export type ID = string | number

export interface Todo {
  text: string
  id: string | number
  isCompleted: boolean
}

export type TodoFormProps = {
  addTodo: (value: string) => void
}

export type TodoListProps = {
  todos: Todo[]
}

export type TodoItemProps = Todo

export type TodosActionsProps = {}
