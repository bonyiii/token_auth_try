import ReactDOM from 'react-dom'
import React, { PropTypes } from 'react'

import store from './store/store.js'
import TodoApp from './components/todo_app.jsx'

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

const render = () => {
  ReactDOM.render(
    <TodoApp
        {...store.getState()}
    />,
    document.getElementById('react-app')
  )
}

store.subscribe(render)
render()
