import React,{ Component } from 'react'
import TodoList from './todo_list.jsx'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { toggleTodo } from '../actions'
import { getVisibleTodos } from '../reducers'
import { fetchTodos } from '../lib/fake_api'

class VisibleTodoList extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then((todos) => (
      console.log(this.props.filter, todos)
    ))
  }

  componentDidUpdate(prevProps) {
    if(prevProps.filter === this.props.filter) { return }

    fetchTodos(this.props.filter).then((todos) => (
      console.log(this.props.filter, todos)
    ))
  }

  render () {
    return <TodoList {...this.props} />
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
  { onTodoClick: toggleTodo }
)(VisibleTodoList))

export default VisibleTodoList
