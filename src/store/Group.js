import { types } from 'mobx-state-tree'

import Item from './Item'

const Group = types
  .model('Group', {
    id: types.identifier,
    name: types.string,
    items: types.array(types.reference(Item))
  })

export default Group
