export type Todo = {
  title: string
  id: string | number
  userId?: number
  completed: boolean
}

export type TodoItemProps = Todo

export type Todos = Todo[]

export type TodosActionsProps = {
  completedTodosExist: boolean
}
