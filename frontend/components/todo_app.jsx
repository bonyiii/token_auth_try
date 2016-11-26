import store from '../store/store.js'
import AddTodo from '../ui/add_todo.jsx'
import VisibleTodoList from '../components/visible_todo_list.jsx'
import Footer from '../ui/footer.jsx'

let nextTodoId = 0
const TodoApp = () => (
  <div>
    <AddTodo
        onAddTodo={ (text) =>
          store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text
          })}
    />
    <VisibleTodoList/>
    <Footer/>
  </div>
)

export default TodoApp
