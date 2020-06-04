import { types } from 'mobx-state-tree'

import Customization from './Customization'
import Item from './Item'

const OrderItem = types.model('OrderItem', {
  item: types.reference(Item),
  customizations: types.maybe(types.array(types.reference(Customization)))
})

export default OrderItem
