import React,{ Component } from 'react'
import TodoList from './todo_list.jsx'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'
import FetchError from './fetch_error.jsx'

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
    fetchTodos(filter).then(response => console.log("fetchTodos done!"))
  }

  render () {
    const { toggleTodo, errorMessage, todos, isFetching } = this.props
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }

    if (errorMessage && !todos.length) {
      return(
        <FetchError
            message={errorMessage}
            onRetry={() => this.fetchData() }
        />
      )
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
    errorMessage: getErrorMessage(state, filter),
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
