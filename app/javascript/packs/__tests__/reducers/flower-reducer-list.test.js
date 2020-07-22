import flowerListReducer from "../../reducers/flower-list-reducer";

describe("flowerListReducer", () => {
  let action;
  const currentState = {
    1: {
      title: "kiwi flower",
      description: "flowers for kiwi with karikari",
      price: 80,
      id: 1,
    },
  };
  test("should return default if no action was happened", () => {
    expect(flowerListReducer({}, { type: null })).toEqual({});
  });
  test("should add flower and return a new state", () => {
    action = {
      type: 'ADD_FLOWER',
      title: "chee flower",
      description: "flowers for chee with ichigo",
      price: 80,
      id: 2,
    };
    expect(flowerListReducer({}, action)).toEqual({
      2: {
        title: "chee flower",
        description: "flowers for chee with ichigo",
        price: 80,
        id: 2,
      }
    });
  });
});
