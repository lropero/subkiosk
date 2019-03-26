import { types } from 'mobx-state-tree'

import Item from './Item'

const ItemGroup = types
  .model('ItemGroup', {
    id: types.identifier,
    name: types.string,
    items: types.array(types.reference(Item))
  })

export default ItemGroup
