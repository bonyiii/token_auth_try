import { combineReducers } from 'redux'
import todos, * as fromTodos from './todos.js'
import visibilityFilter from './visibility_filter.js'

const todoApp = combineReducers({
  todos
})

export const getVisibleTodos = (state, filter) => (
  fromTodos.getVisibleTodos(state.todos, filter)
)

export default todoApp
