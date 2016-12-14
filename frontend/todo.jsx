import ReactDOM from 'react-dom'
import React, { PropTypes } from 'react'

import { Provider } from 'react-redux'

import TodoApp from './components/todo_app.jsx'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('react-app')
)
