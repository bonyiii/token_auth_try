import { combineReducers } from 'redux'
import byId, * as fromById from './by_id'
import createList, * as fromList from './create_list'
import userData, * as fromUserData from './user_data'

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
})

const todos = combineReducers({
  byId,
  listByFilter,
  userData
})

export default todos

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter])
  return ids.map(id => fromById.getTodo(state.byId, id))
}

export const getIsFetching = (state, filter) => (
  fromList.getIsFetching(state.listByFilter[filter])
)

export const getErrorMessage = (state, filter) => (
  fromList.getErrorMessage(state.listByFilter[filter])
)

export const getUser = (state, filter) => (
  state.userData
)
