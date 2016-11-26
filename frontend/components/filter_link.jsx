import Link from '../ui/link.jsx'

class FilterLink extends React.Component {
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

    return (
      <Link
      active= {
        props.filter === state.visibilityFilter
      }
      onClick={() =>
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: props.filter
        })
      }
      >
      {props.children}
      </Link>
    )
  }
}

export default FilterLink
