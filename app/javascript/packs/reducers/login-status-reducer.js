import * as c from "./../actions/ActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case c.CHECK_LOGIN_STATUS:
      return Object.assign({}, state, {
        currentUser: action.currentUser,
      });
    case c.UPDATED_PROFILE:
      return Object.assign({}, state, {
        message: true,
      });
    case c.RESET_PROFILE_MESSAGE:
      return Object.assign({}, state, { message: false });
    default:
      return state;
  }
};
