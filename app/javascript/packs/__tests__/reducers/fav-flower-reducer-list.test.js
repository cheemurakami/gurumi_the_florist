import favFlowerListReducer from "../../reducers/fav-flower-list-reducer";
import * as c from "../../actions/ActionType";

describe("favFlowerListReducer", () => {
  let action;

  test("should return default if no action was happened", () => {
    expect(favFlowerListReducer({}, { type: null })).toEqual({});
  });

  test("should load fav flowers return a new state", () => {
    action = { type: c.LOADED_FAV_FLOWERS };
    expect(favFlowerListReducer({}, action)).toEqual({
      flowers: action.flowers
    });
  });
  
})
