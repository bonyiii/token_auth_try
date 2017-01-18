import { normalize, schema} from 'normalizr'

export const todo = new schema.Entity('todos')
export const arrayOfTodos = new schema.Array(todo)

export const user = new schema.Entity('user')
