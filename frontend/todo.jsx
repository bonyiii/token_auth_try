import ReactDOM from 'react-dom'
import React, { PropTypes } from 'react'

import { combineReducers } from 'redux'
import { createStore } from 'redux'

import todos from './reducers/todos.js'
import visibilityFilter from './reducers/visibility_filter.js'

import TodoApp from './components/todo_app.jsx'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})


ReactDOM.render(
  <TodoApp
      store={createStore(todoApp)}
  />,
  document.getElementById('react-app')
)
