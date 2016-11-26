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

class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return this.props.children
  }
}
Provider.childContextTypes = {
  store: React.PropTypes.object
}

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('react-app')
)
