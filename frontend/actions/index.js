import { v4 } from 'node-uuid'
import * as api from '../lib/fake_api'

const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id: id
})

export const addTodo = (value) => ({
  type: 'ADD_TODO',
  id: v4(),
  text: value
})

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
})

export const fetchTodos = (filter) => (dispatch) => {
  dispatch(requestTodos(filter))

  return api.fetchTodos(filter).then(response => (
    dispatch(receiveTodos(filter, response))
  ))
}
