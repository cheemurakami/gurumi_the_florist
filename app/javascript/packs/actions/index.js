import * as c from "./ActionType";

export const addedFlower = () => {
  return {
    type: c.ADDED_FLOWER,
  };
};
export const updatedFlower = () => {
  return {
    type: c.UPDATED_FLOWER,
  };
};
export const loadedForm = () => {
  return {
    type: c.LOADED_FORM,
  };
};
export const deletedFlower = () => {
  return {
    type: c.DELETED_FLOWER,
  };
};
export const checkedLoginStatus = (currentUser) => {
  return {
    type: c.CHECK_LOGIN_STATUS,
    currentUser,
  };
};
export const loadedFlowers = (flowers) => {
  return {
    type: c.LOADED_FLOWERS,
    flowers,
  };
};
export const loadedFavFlowers = (flowers) => {
  return {
    type: c.LOADED_FAV_FLOWERS,
    flowers,
  };
};
export const loadedFlowersInCart = (flowers) => {
  return {
    type: c.LOADED_FLOWERS_IN_CART,
    flowers,
  };
};
export const addedFlowerInCart = (flower) => {
  return {
    type: c.ADDED_FLOWER_IN_CART,
    flower,
  };
};
export const deletedFlowerInCart = (id) => {
  return {
    type: c.DELETED_FLOWER_IN_CART,
    id,
  };
};
export const addedAddress = () => {
  return {
    type: c.ADDED_ADDRESS,
  };
};
export const deletedAddress = () => {
  return {
    type: c.DELETED_ADDRESS,
  };
};
export const updatedAddress = () => {
  return {
    type: c.UPDATED_ADDRESS,
  };
};
export const setDefault = () => {
  return {
    type: c.SET_DEFAULT,
  };
};
export const resetMessage = () => {
  return {
    type: c.RESET_MESSAGE,
  };
};
export const changedAddressesState = (addresses) => {
  return {
    type: c.CHANGED_ADDRESSES_STATE,
    addresses,
  };
};
export const selectedAddressState = (address) => {
  return {
    type: c.SELECTED_ADDRESS_STATE,
    address,
  };
};

