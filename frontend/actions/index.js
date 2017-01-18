import { normalize } from 'normalizr'
import * as schema from './schema'
import * as api from '../lib/fake_api'
import { getIsFetching } from '../reducers'

export const toggleTodo = (id) => (dispatch) => (
  api.toggleTodo(id).then(
    response => {
      dispatch({
        type: 'TOGGLE_TODO_SUCCESS',
        response: normalize(response, schema.todo)
      })
    }
  )
)

export const addTodo = (text) => (dispatch) => (
  api.addTodo(text).then(
    response => {
      dispatch({
        type: 'ADD_TODO_SUCCESS',
        response: normalize(response, schema.todo)
      })
    }
  )
)

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
        response: normalize(response, schema.arrayOfTodos)
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

export const getUserData = (id) => (dispatch) => {
  dispatch({
    type: 'FETCH_USER_DATA_REQUEST',
    id
  })

  return fetchUser(id).then(
    response => {
      dispatch({
        type: 'FETCH_USER_SUCCESS',
        response: normalize(response, schema.user)
      })
    }
  )
}

export const fetchUser = (id) => {
  return $.ajax({
    url : `/pages/users/${id}`,
    headers: {
      'Authorization' : jwtToken
    }
  })
}
