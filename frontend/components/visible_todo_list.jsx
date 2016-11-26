import TodoList from '../ui/todo_list.jsx'
import getVisibleTodos from '../reducers/get_visible_todos'

export default class VisibleTodoList extends React.Component {
  componentDidMount() {
    const { store } = this.props
    this.unsubscribe =  store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const { store } = this.props
    const state = store.getState()

    return(
      <TodoList
      todos={getVisibleTodos(state.todos, state.visibilityFilter)}
      onTodoClick={ (id) =>
        store.dispatch({
          type: 'TOGGLE_TODO',
          id: id
        })}
      />
    )
  }
}
