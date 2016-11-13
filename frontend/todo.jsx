import ReactDOM from 'react-dom'
import React, { PropTypes } from 'react'
import { createStore } from 'redux'
import * as TodoActions from './actions/todo'
import { combineReducers } from 'redux'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const initialState = {
  visibiltyFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id == action.id) {
        return {
          ...state,
          completed: !state.completed
        }
      }
      return state
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map((t) => todo(t, action))
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

const store = createStore(todoApp)

let nextTodoId = 0
class TodoApp extends React.Component {
  render() {
    return(
      <div>
      <input ref={ node => {
        this.input = node
      }}
      />
      <button onClick={ () => {
        store.dispatch({
          type: 'ADD_TODO',
          text: this.input.value,
          id: nextTodoId++
        })
        this.input.value = ""
      }}>
      Add Todo
      </button>
      <ul>
      {this.props.todos.map(todo =>
        <li
            key={todo.id}
            onClick = {() => {
                store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: todo.id
                })
              }}
            style = {{ textDecoration: todo.completed? 'line-through' : 'none' }}
        >
          {todo.text}
        </li>
      )}
        </ul>
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp
        todos={store.getState().todos}
    />,
    document.getElementById('react-app')
  )
}

store.subscribe(render)
render()
