import Link from '../ui/link.jsx'

export default class FilterLink extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe =  store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const { store } = this.context
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
FilterLink.contextTypes = {
  store: React.PropTypes.object
}
