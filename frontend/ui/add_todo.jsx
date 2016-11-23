const AddTodo = ({
  onAddTodo
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
                onAddTodo(input.value)
                input.value = ""
              }
            }}
      />
      <button onClick={ () => {
          onAddTodo(input.value)
          input.value = ""
        }}>
        Add Todo
      </button>
    </div>
  )
}
export default AddTodo
