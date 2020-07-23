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
})