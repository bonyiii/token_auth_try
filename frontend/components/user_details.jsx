import { connect } from 'react-redux'
import * as actions from '../actions'

let UserDetails = ({
  user,
  dispatch,
}) => (
  <div>
    <p>Id: {user.id}</p>
    <p>Nickname: {user.nickname}</p>
    <button onClick={() => dispatch(actions.getUserData(1))}>Show user data</button>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    user: getUser(state)
}

const mapDispatchToProps = (dispatch, ownProps) => (
  actions
)

UserDetails = connect(mapStateToProps, null)(UserDetails)

export default UserDetails
