import { Provider } from 'react-redux'
import TodoApp from './todo_app.jsx'

const Root = ({ store }) => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)

export default Root
