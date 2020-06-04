import { types } from 'mobx-state-tree'

import CustomizationGroups from './CustomizationGroups'
import Customizations from './Customizations'
import ItemGroups from './ItemGroups'
import Items from './Items'
import Order from './Order'
import {
  customizationGroups,
  customizations,
  itemGroups,
  items
} from './snapshots'

const store = types.model('Store', {
  customizationGroups: types.maybe(CustomizationGroups),
  customizations: types.maybe(Customizations),
  itemGroups: types.maybe(ItemGroups),
  items: types.maybe(Items),
  order: types.optional(Order, {})
})

export default store.create({
  customizationGroups,
  customizations,
  itemGroups,
  items
})
