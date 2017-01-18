const userData = (state = {id: 'not fetched', nickname: 'not fetched'}, action) => {
  switch(action.type) {
  case 'FETCH_USER_SUCCESS':
    return action.response.entities.user[action.response.result]
  default:
    return state
  }
}

export default userData
