import ReactDOM from 'react-dom'
import React, { PropTypes } from 'react'
import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todos from './reducers/todos.js'
import visibilityFilter from './reducers/visibility_filter.js'
import TodoApp from './components/todo_app.jsx'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('react-app')
)
