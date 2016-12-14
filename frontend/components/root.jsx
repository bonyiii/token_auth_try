import { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import TodoApp from './todo_app.jsx'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/pages/show/(:filter)' component={TodoApp} />
    </Router>
  </Provider>
)
Root.propTypes ={
  store: PropTypes.object.isRequired
}

export default Root
