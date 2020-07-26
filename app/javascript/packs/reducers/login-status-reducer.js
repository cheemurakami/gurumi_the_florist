import * as c from './../actions/ActionType';

export default (state = {}, action) => {
  switch(action.type){
    case c.CHECK_LOGIN_STATUS:
      return Object.assign({}, state, {
        currentUser: action.currentUser
      })
    default:
      return state;
  }
}