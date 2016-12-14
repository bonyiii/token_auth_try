import { v4 } from 'node-uuid'

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id: id
})

export const addTodo = (value) => ({
  type: 'ADD_TODO',
  id: v4(),
  text: value
})
