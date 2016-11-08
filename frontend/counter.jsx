import ReactDOM from 'react-dom'
import React, { PropTypes } from 'react'
import { createStore } from 'redux'

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCERMENT':
      return state +1
    case 'DECREMENT':
      return state -1
    default:
      return state
  }
}

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const store = createStore(counter)

const render = () => {
  ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={ () =>
          store.dispatch({
            type: 'INCERMENT'
          })
                    }
        onDecrement={ () =>
          store.dispatch({
            type: 'DECREMENT'
          })
                    }
    />,
    document.getElementById('react-app')
  )
}

store.subscribe(render)
render()
