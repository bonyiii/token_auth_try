import { combineReducers } from 'redux'
import todos from './todos.js'
import visibilityFilter from './visibility_filter.js'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
