import React,{ Component } from 'react'
import TodoList from './todo_list.jsx'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import { getVisibleTodos, getIsFetching } from '../reducers'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.filter === this.props.filter) { return }
    this.fetchData()
  }

  fetchData() {
    const { filter, requestTodos, fetchTodos } = this.props
    requestTodos(filter)
    fetchTodos(filter)
  }

  render () {
    const { toggleTodo, todos, isFetching } = this.props

    if (isFetching && !todos.length) {

      return <p>Loading...</p>
    }

    return (
      <TodoList
          todos={todos}
          onTodoClick={toggleTodo}
      />
    )
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all'

  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  }
}

//const mapDispatchToProps = (dispatch) => ({
//  onTodoClick(id) {
//    dispatch(toggleTodo(id))
//  }
//})

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))

export default VisibleTodoList
