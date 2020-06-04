import { types } from 'mobx-state-tree'

import Item from './Item'

const Order = types
  .model('Order', {
    items: types.array(types.reference(Item)),
    customizations: types.array(types.string)
  })
  .views(self => ({
    get orderTotal () {
      return self.items.reduce((acc, item) => acc + item.price, 0)
    }
  }))
  .actions(self => ({
    addItem (itemId, customizations = {}) {
      self.items.push(itemId)
      self.customizations.push(
        JSON.stringify({ id: itemId, ...customizations })
      )
    },
    resetOrder () {
      self.items = []
      self.customizations = []
    }
  }))

export default Order
