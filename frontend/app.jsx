import ReactDOM from 'react-dom'

import configureStore from './store'
import Root from './components/root.jsx'
import jwtDecode from 'jwt-decode'

const store = configureStore()

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('react-app')
)

$.ajax({
  url : '/pages/users/1',
  headers: {
    'Authorization' : jwtToken
  }
});

console.log(jwtDecode(jwtToken))
