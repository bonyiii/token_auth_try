import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import {saveState, loadState } from '../lib/local_storage'
import todoApp from '../reducers'

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch

  if (!console.group) {
    return rawDispatch
  }

  return (action) => {
    console.group(action.type)
    console.log('%c prev.state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

const configureStore = () => {
  const persistedState = loadState()

  const store = createStore(
    todoApp,
    persistedState
  )

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
  }

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
    console.log(store.getState())
  }, 1000))

  return store
}
export default configureStore
