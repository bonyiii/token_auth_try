import ReactDOM from 'react-dom'
import React, { PropTypes } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import TodoApp from './components/todo_app.jsx'
import todoApp from './reducers'

const persistedState ={
  todos: [
    {
      id: '0',
      text: 'Welcome back!',
      completed: false
    }
  ]
}

const store = createStore(todoApp, persistedState)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('react-app')
)
