import { connect } from 'react-redux'
import * as actions from '../actions'
import { getUser } from '../reducers'

let UserDetails = ({
  user,
  dispatch,
}) => (
  <div>
    <p>Id: {user.id}</p>
    <p>Nickname: {user.nickname}</p>
    <button onClick={() => dispatch(actions.getUserData(3))}>Show user data</button>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return { user: getUser(state, null) }
}

const mapDispatchToProps = (dispatch, ownProps) => (
  actions
)

UserDetails = connect(mapStateToProps, null)(UserDetails)

export default UserDetails
