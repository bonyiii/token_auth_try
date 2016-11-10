import expect, { createSpy, spyOn, isSpy } from 'expect'
import deepFreeze from 'deep-freeze'

const todos = (state, action) => {
  switch(action.type) {
  case 'ADD_TODO':
    return [
        ...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
    ]
  case 'TOGGLE_TODO':
    return state.map((todo) => {
      if (todo.id == action.id) {
        return {
            ...todo,
          completed: true
        }
      }
      return todo
    })
  default:
    state
  }
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
console.log('All tests passed')
