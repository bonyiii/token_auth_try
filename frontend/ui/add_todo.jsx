import { connect } from 'react-redux'

let nextTodoId = 0
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
    <input
    ref={ node => {
      input = node
    }}
    onKeyPress={ (e) => {
      if (e.key === "Enter") {
        dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text: input.value
        })
        input.value = ""
      }
    }}
    />
    <button onClick={ () => {
      dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: input.value
      })
      input.value = ""
    }}>
    Add Todo
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
