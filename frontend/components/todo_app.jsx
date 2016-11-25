import store from '../store/store.js'
import AddTodo from '../ui/add_todo.jsx'
import TodoList from '../ui/todo_list.jsx'
import Footer from '../ui/footer.jsx'

import getVisibleTodos from '../reducers/get_visible_todos'

let nextTodoId = 0
const TodoApp = ({
  todos,
  visibilityFilter
}) => (
  <div>
    <AddTodo
        onAddTodo={ (text) =>
          store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text
          })}
    />
    <TodoList
        todos={getVisibleTodos(todos, visibilityFilter)}
        onTodoClick={ (id) =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id: id
          })}
    />
    <Footer
    />
  </div>
)

export default TodoApp
