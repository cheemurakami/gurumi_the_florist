import * as actions from '../../actions';
import * as c from '../../actions/ActionType';


describe ('actions', () => {
  it('addedFlower should create ADDED_FLOWER action', () => {
    expect(actions.addedFlower()).toEqual({
      type: c.ADDED_FLOWER
    })
  })
  it('addedFlower should create UPDATED_FLOWER action', () => {
    expect(actions.updatedFlower()).toEqual({
      type: c.UPDATED_FLOWER
    })
  })
  it('loadedForm should create LOADED_FORM action', () => {
    expect(actions.loadedForm()).toEqual({
      type: c.LOADED_FORM
    })
  })
  it('deletedFlower should create DELETED_FLOWER action', () => {
    expect(actions.deletedFlower()).toEqual({
      type: c.DELETED_FLOWER
    })
  })
  it('checkedLoginStatus should create CHECK_LOGIN_STATUS action', () => {
    let currentUser = {name: "kiwi"}
    expect(actions.checkedLoginStatus(currentUser)).toEqual({
      type: c.CHECK_LOGIN_STATUS,
      currentUser
    })
  })
  it('loadedFlowers should create LOADED_FLOWERS action', () => {
    let flowers = {title: "kiwi flower", price: 80}
    expect(actions.loadedFlowers(flowers)).toEqual({
      type: c.LOADED_FLOWERS,
      flowers
    })
  })
  it('loadedFavFlowers should create LOADED_FAV_FLOWERS action', () => {
    let flowers = {title: "kiwi flower", price: 80}
    expect(actions.loadedFavFlowers(flowers)).toEqual({
      type: c.LOADED_FAV_FLOWERS,
      flowers
    })
  })
  it('loadedFlowersInCart should create LOADED_FLOWERS_IN_CART action', () => {
    let flowers = {title: "kiwi flower", price: 80}
    expect(actions.loadedFlowersInCart(flowers)).toEqual({
      type: c.LOADED_FLOWERS_IN_CART,
      flowers
    })
  })
  it('addedFlowerInCart should create ADDED_FLOWER_IN_CART action', () => {
    expect(actions.addedFlowerInCart()).toEqual({
      type: c.ADDED_FLOWER_IN_CART
    })
  })
  it('deletedFlowerInCart should create DELETED_FLOWER_IN_CART action', () => {
    expect(actions.deletedFlowerInCart()).toEqual({
      type: c.DELETED_FLOWER_IN_CART
    })
  })
})