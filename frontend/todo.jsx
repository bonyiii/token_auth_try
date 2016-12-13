import ReactDOM from 'react-dom'
import React, { PropTypes } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import TodoApp from './components/todo_app.jsx'
import todoApp from './reducers'

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('react-app')
)
