import React,{ Component } from 'react'
import TodoList from './todo_list.jsx'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import { getVisibleTodos } from '../reducers'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.filter === this.props.filter) { return }
    this.fetchData()
  }

  fetchData() {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter)

  }

  render () {
    const { toggleTodo, ...rest } = this.props
    return (
      <TodoList
          {...rest}
          onTodoClick={toggleTodo}
      />
    )
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all'

  return {
    todos: getVisibleTodos(state, filter),
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
