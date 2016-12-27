import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import todoApp from '../reducers'

const thunk = (store) => (next) => (action) =>
      typeof action === 'function' ?
      action(store.dispatch, store.getState) :
      next(action)

const configureStore = () => {
  const middlewares = [thunk]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  // params: todoApp, persisted state(optional), applyMiddleware(optional)
  return createStore(
    todoApp,
    applyMiddleware(...middlewares)
  )
}

export default configureStore
