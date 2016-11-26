import AddTodo from '../ui/add_todo.jsx'
import VisibleTodoList from '../components/visible_todo_list.jsx'
import Footer from '../ui/footer.jsx'

const TodoApp = ({store}) => (
  <div>
    <AddTodo store={store}/>
    <VisibleTodoList store={store}/>
    <Footer store={store}/>
  </div>
)

export default TodoApp
