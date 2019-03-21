import { types } from 'mobx-state-tree'

import Groups from './Groups'
import Items from './Items'
import Order from './Order'
import { groups, items } from './snapshots'

const store = types
  .model('Store', {
    groups: types.maybe(Groups),
    items: types.maybe(Items),
    order: types.optional(Order, {})
  })

export default store.create({ groups, items })
