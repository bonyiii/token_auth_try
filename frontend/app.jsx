import ReactDOM from 'react-dom'

import configureStore from './store'
import Root from './components/root.jsx'
import { fetchTodos } from './lib/fake_api'

fetchTodos('all').then(todos =>
console.log(todos)
)

const store = configureStore()

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('react-app')
)
