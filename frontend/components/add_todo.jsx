import { connect } from 'react-redux'
import { addTodo } from '../actions'

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
                dispatch(addTodo(input.value))
                input.value = ""
              }
            }}
      />
      <button onClick={ () => {
          dispatch(addTodo(input.value))
          input.value = ""
        }}>
        Add Todo
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
