import expect, { createSpy, spyOn, isSpy } from 'expect'
import deepFreeze from 'deep-freeze'

const addTodo = (state, action) => {
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
    addTodo(todoBefore, action)
  ).toEqual(todoAfter)
}

testAddTodo()
console.log('All tests passed')
