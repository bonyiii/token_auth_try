import Todo from './todo.jsx'

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
export default TodoList
