import { destroy, types } from 'mobx-state-tree'

import Item from './Item'

const Order = types
  .model('Order', {
    items: types.array(types.reference(Item))
  })
  .views((self) => ({
    get orderItems () {
      return self.items
    },
    get orderTotal () {
      return self.items.reduce((acc, item) => acc + item.price, 0)
    }
  }))
  .actions((self) => ({
    addItem (itemId, quantity) {
      self.items.push(...(Array(quantity).fill(itemId)))
    },
    removeItem (item) {
      destroy(item)
    },
    resetOrder () {
      self.items = []
    }
  }))

export default Order
