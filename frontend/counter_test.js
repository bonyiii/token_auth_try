import expect, { createSpy, spyOn, isSpy } from 'expect'
import deepFreeze from 'deep-freeze'
import { createStore } from 'redux'

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
        completed: true
      }
    }
    return state
  default:
    state
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

const todoApp = (state = {}, action) => {
  return {
    todos: todos(
      state.todos,
      action
    ),
    visibilityFilter:visibilityFilter(
      state.visibilityFilter,
      action
    )
  }
}

const store = createStore(todoApp)

console.log(store.getState())

const testTodoApp = () => {
  const todoAppAfter = {
    todos: [{
      id: 0,
      text: 'Learn Redux',
      completed: false
    }],
    visibilityFilter: 'SHOW_ALL'
  }
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }

  deepFreeze(action)
  store.dispatch(action)

  expect(
    store.getState()
  ).toEqual(todoAppAfter)
}

const testAddTodo = () => {
  const todoBefore =[]
  const todoAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }]
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }

  deepFreeze(todoBefore)
  deepFreeze(action)

  expect(
    todos(todoBefore, action)
  ).toEqual(todoAfter)
}

const testToggleTodo = () => {
  const todoBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go Shopping',
      completed: false
    }
  ]


  const todoAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go Shopping',
      completed: true
    }]

  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  }

  deepFreeze(todoBefore)
  deepFreeze(action)

  expect(
    todos(todoBefore, action)
  ).toEqual(todoAfter)
}

testAddTodo()
testToggleTodo()
testTodoApp()
console.log('All tests passed')
