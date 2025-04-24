import { createContext } from 'react'

import { ID } from '../../types/Todo'

const initialState = {
  deleteTodo: (todoId: ID) => {},
  toggleTodo: (todoId: ID) => {},
}

export const TodoContext = createContext(initialState)
