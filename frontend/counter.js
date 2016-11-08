import { createStore } from 'redux'
const counter = (state=0, action) => {
  switch(action.type) {
  case 'INCERMENT':
    return state +1
  case 'DECREMENT':
    return state -1
  default:
    state
  }
}
const store = createStore(counter)

console.log(store.getState())

const render = () => {
  document.body.innerText = store.getState()
}

store.subscribe(render)
render()

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCERMENT' })
})
