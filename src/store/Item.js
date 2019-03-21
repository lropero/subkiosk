import { types } from 'mobx-state-tree'

const Item = types
  .model('Item', {
    id: types.identifier,
    name: types.string,
    description: types.maybe(types.string),
    price: types.number
  })

export default Item
