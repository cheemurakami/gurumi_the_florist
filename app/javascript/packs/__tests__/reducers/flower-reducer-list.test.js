import flowerListReducer from "../../reducers/flower-list-reducer";
import * as c from '../../actions/ActionType';

describe("flowerListReducer", () => {
  let action;
  
  test("should return default if no action was happened", () => {
    expect(flowerListReducer({}, { type: null })).toEqual({});
  });
  test("should add flower and return a new state", () => {
    action = {type: c.ADDED_FLOWER}
    expect(flowerListReducer({}, action)).toEqual({ showMsg: true });
  });
  test('should edit flower and return a new state', () => {
    action = {type: c.UPDATED_FLOWER}
    expect(flowerListReducer({}, action)).toEqual({ showMsg: true })
  })
});

