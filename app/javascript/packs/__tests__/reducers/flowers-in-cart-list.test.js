import flowersInCartListReducer from "../../reducers/flowers-in-cart-list-reducer";
import * as c from "../../actions/Actiontype";

describe("flowersInCartListReducer", () => {
  let action;
  test("should return default if no action was happened", () => {
    action = { type: null }
    expect(flowersInCartListReducer({}, action)).toEqual(
      {}
    );
  })
  test("should loaded flowers in cart and return a new state", () => {
    action = { type: c.LOADED_FLOWERS_IN_CART };
    expect(flowersInCartListReducer({}, action)).toEqual({ flowers: action.flowers });
  });
})