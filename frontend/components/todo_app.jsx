import AddTodo from '../ui/add_todo.jsx'
import VisibleTodoList from '../components/visible_todo_list.jsx'
import Footer from '../ui/footer.jsx'

const TodoApp = ({ params }) => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp
