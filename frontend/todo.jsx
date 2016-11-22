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

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
      onClick = {onClick}
      style = {{
        textDecoration:
                       completed ?
                       'line-through' :
                       'none'
      }}
  >
    {text}
  </li>
)

const TodoList =({
  todos,
  onTodoClick
}) => (
  <ul>
  {todos.map(todo =>
    <Todo
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo.id)}
    />
  )}
  </ul>
)

class TodoApp extends React.Component {

  addTodo(value) {
    store.dispatch({
      type: 'ADD_TODO',
      text: this.input.value,
      id: nextTodoId++
    })
    this.input.value = ""
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
        <input
            ref={ node => {
                this.input = node
              }}
            onKeyPress={ (e) => {
                if (e.key === "Enter") {
                  this.addTodo()
                }
              }}
        />
        <button onClick={ () => {
            this.addTodo()
          }}>
          Add Todo
        </button>
        <TodoList
            todos={visibleTodos}
            onTodoClick={ (id) =>
              store.dispatch({
                type: 'TOGGLE_TODO',
                id: id
              })}
        />
        <p>
          Show:
          { ' ' }
          <FilterLink
              filter="SHOW_ALL"
              currentFilter={visibilityFilter}
          >
            All
          </FilterLink>
          { ' ' }
          <FilterLink
              filter="SHOW_ACTIVE"
              currentFilter={visibilityFilter}
          >
            Active
          </FilterLink>
          { ' ' }
          <FilterLink
              filter="SHOW_COMPLETED"
              currentFilter={visibilityFilter}
          >
            Completed
          </FilterLink>
        </p>
      </div>
    )
  }
}

const FilterLink = ({
  filter,
  currentFilter,
  children
}) => {
  if (currentFilter == filter) {
    return <span>{children}</span>
  } else {
    return(
      <a href="#"
      onClick={ e =>{
        e.preventDefault()
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        })
      }}
      >
      {children}
    </a>
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
