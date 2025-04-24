export type ID = string | number

export interface Todo {
  text: string
  id: string | number
  isCompleted: boolean
}

export type TodoFormProps = {
  addTodo: (value: string) => void
}

export type FormFields = {}

export type TodoListProps = {}

export type TodoItemProps = {}

export type TodosActionsProps = {}
