import loginStatusReducer from "../../reducers/login-status-reducer";
import * as c from "../../actions/ActionType";

describe("loginStatusReducer", () => {
  let action;
  test("should return default if no action was happened", () => {
    action = { type: null }
    expect(loginStatusReducer({}, action)).toEqual(
      {}
    );
  })
  test("should return a new state", () => {
    let fakeUser = {email: "kiwi@fake.com"}
    action = { type: c.CHECK_LOGIN_STATUS, currentUser: fakeUser }
    expect(loginStatusReducer({}, action)).toEqual(
      {
        currentUser: action.currentUser
      }
    );
  })
})
