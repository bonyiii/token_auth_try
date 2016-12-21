import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import todoApp from '../reducers'

const configureStore = () => {
  const middlewares = [promise]

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
