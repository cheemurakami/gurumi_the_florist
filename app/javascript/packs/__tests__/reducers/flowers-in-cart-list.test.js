import flowersInCartListReducer from "../../reducers/flowers-in-cart-list-reducer";
import * as c from "../../actions/ActionType";

describe("flowersInCartListReducer", () => {
  let action;
  test("should return default if no action was happened", () => {
    action = { type: null }
    expect(flowersInCartListReducer({}, action)).toEqual(
      {}
    );
  })
  test("should loaded flowers in cart return a new state", () => {
    action = { type: c.LOADED_FLOWERS_IN_CART };
    expect(flowersInCartListReducer({}, action)).toEqual({ flowers: action.flowers });
  });
  test("should added flowers in cart return a new state", () => {
    action = { type: c.ADDED_FLOWER_IN_CART };
    
    expect(flowersInCartListReducer({}, action)).toEqual({ inCart: true });
  });
  test("should deleted flowers in cart return a new state", () => {
    action = { type: c.DELETED_FLOWER_IN_CART };
    expect(flowersInCartListReducer({}, action)).toEqual({ inCart: false });
  });
})