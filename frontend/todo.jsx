import ReactDOM from 'react-dom'

import configureStore from './store'
import Root from './components/root.jsx'

const store = configureStore()

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('react-app')
)
