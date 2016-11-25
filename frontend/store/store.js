import { createStore } from 'redux'
import { combineReducers } from 'redux'

import todos from '../reducers/todos.js'
import visibilityFilter from '../reducers/visibility_filter.js'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

const store = createStore(todoApp)
export default store
