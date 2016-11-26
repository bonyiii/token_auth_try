let nextTodoId = 0
const AddTodo = ({
  store
}) => {
  let input

  return (
    <div>
    <input
    ref={ node => {
      input = node
    }}
    onKeyPress={ (e) => {
      if (e.key === "Enter") {
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text: input.value
        })
        input.value = ""
      }
    }}
    />
    <button onClick={ () => {
      store.dispatch({
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
export default AddTodo
