import * as actions from '../../actions';

describe ('actions', () => {
  it('addFlower should create ADD_FLOWER action', () => {
    expect(actions.addFlower({
      title: 'test',
      description: 'test',
      price:20,
      id:1
    })).toEqual({
      type: "ADD_FLOWER",
      title: 'test',
      description: 'test',
      price:20,
      id:1
    })
  })
})