import { v4 as uuidv4 } from 'uuid'

import { Todo } from '../types/Todo'

export const createTodoFromSource = (source: Partial<Todo>): Todo => {
  return {
    id: source.id ?? uuidv4(),
    title: source.title ?? 'Без названия',
    completed: source.completed ?? false,
  }
}
