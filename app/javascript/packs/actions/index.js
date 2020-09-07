import * as c from './ActionType'

export const addedFlower = () => {
  return {
    type: c.ADDED_FLOWER
  }
}
export const updatedFlower = () => {
  return {
    type: c.UPDATED_FLOWER
  }
}
export const loadedForm = () => {
  return {
    type: c.LOADED_FORM
  }
}
export const deletedFlower = () => {
  return {
    type: c.DELETED_FLOWER
  }
}
export const checkedLoginStatus = (currentUser) => {
  return {
    type: c.CHECK_LOGIN_STATUS,
    currentUser
  }
}
export const loadedFlowers = (flowers) => {
  return {
    type: c.LOADED_FLOWERS,
    flowers
  }
}
export const loadedFavFlowers = (flowers) => {
  return {
    type: c.LOADED_FAV_FLOWERS,
    flowers
  }
}
export const loadedFlowersInCart = (flowers) => {
  return {
    type: c.LOADED_FLOWERS_IN_CART,
    flowers
  }
}
export const addedFlowerInCart = (flower) => {
  return {
    type: c.ADDED_FLOWER_IN_CART,
    flower
  }
}
export const deletedFlowerInCart = () => {
  return {
    type: c.DELETED_FLOWER_IN_CART
  }
}