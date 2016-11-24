import ReactDOM from 'react-dom'
import React, { PropTypes } from 'react'
import { createStore } from 'redux'
import * as TodoActions from './actions/todo'
import { combineReducers } from 'redux'

import TodoList from './ui/todo_list.jsx'
import AddTodo from './ui/add_todo.jsx'
import Footer from './ui/footer.jsx'

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

const getVisibleTodos = (
  todos,
  filter
) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      )
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      )
  }
}

const store = createStore(todoApp)

let nextTodoId = 0
class TodoApp extends React.Component {
  addTodo(value) {
    store.dispatch({
      type: 'ADD_TODO',
      text: value,
      id: nextTodoId++
    })
  }

  render() {
    const {
      todos,
      visibilityFilter
    } = this.props
    const visibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
    )
    return(
      <div>
        <AddTodo
            onAddTodo={ (value) => this.addTodo(value) }
            />
        <TodoList
            todos={visibleTodos}
            onTodoClick={ (id) =>
              store.dispatch({
                type: 'TOGGLE_TODO',
                id: id
              })}
        />
        <Footer
            visibilityFilter={visibilityFilter}
            onFilterClick={ filter =>{
                store.dispatch({
                  type: 'SET_VISIBILITY_FILTER',
                  filter
                })
              }}
        />
      </div>
    )
  }
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
