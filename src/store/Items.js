import { types } from 'mobx-state-tree'

import Item from './Item'

const Items = types
  .model('Items', {
    items: types.array(Item)
  })
  .views(self => ({
    getItem (itemId) {
      return self.items.find(item => item.id === itemId)
    }
  }))

export default Items
