import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import {saveState, loadState } from '../lib/local_storage'
import todoApp from '../reducers'

const configureStore = () => {
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

  return store
}
export default configureStore
