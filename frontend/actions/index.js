import { v4 } from 'node-uuid'
import { getIsFetching } from '../reducers'
import * as api from '../lib/fake_api'

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id: id
})

export const addTodo = (value) => ({
  type: 'ADD_TODO',
  id: v4(),
  text: value
})

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  })

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response
      })
    },
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.'
      })
    }
  )
}
