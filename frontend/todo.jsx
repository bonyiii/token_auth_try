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

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state= [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

let store = createStore(todoApp)

const addTodo = (text) => store.dispatch(TodoActions.add(text))
const delTodo = (text) => store.dispatch(TodoActions.del(text))

addTodo("megvan")
addTodo("nagyon atom")
delTodo(2)
console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]
