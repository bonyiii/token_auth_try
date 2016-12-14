import ReactDOM from 'react-dom'
import React, { PropTypes } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {saveState, loadState } from './lib/local_storage'
import throttle from 'lodash/throttle'

import TodoApp from './components/todo_app.jsx'
import todoApp from './reducers'

const persistedState = loadState()

const store = createStore(
  todoApp,
  persistedState
)

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  })
  console.log(store.getState())
}, 1000))


ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('react-app')
)
