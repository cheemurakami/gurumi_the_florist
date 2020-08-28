import flowerListReducer from "../../reducers/flower-list-reducer";
import * as c from "../../actions/ActionType";

describe("flowerListReducer", () => {
  let action;

  test("should return default if no action was happened", () => {
    expect(flowerListReducer({}, { type: null })).toEqual({});
  });
  test("should added flower and return a new state", () => {
    action = { type: c.ADDED_FLOWER };
    expect(flowerListReducer({}, action)).toEqual({ showMsg: true });
  });
  test("should updated flower and return a new state", () => {
    action = { type: c.UPDATED_FLOWER };
    expect(flowerListReducer({}, action)).toEqual({ showMsg: true });
  });
  test("should loaded form and return a new state", () => {
    action = { type: c.LOADED_FORM };
    expect(flowerListReducer({}, action)).toEqual({ showMsg: false });
  });
  test("should loaded flowers and return a new state", () => {
    action = { type: c.LOADED_FLOWERS };
    expect(flowerListReducer({}, action)).toEqual({ flowers: action.flowers });
  });
});
