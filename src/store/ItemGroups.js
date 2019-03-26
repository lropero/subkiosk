import { types } from 'mobx-state-tree'

import ItemGroup from './ItemGroup'

const ItemGroups = types
  .model('ItemGroups', {
    itemGroups: types.array(ItemGroup),
    selected: types.reference(ItemGroup)
  })
  .views((self) => ({
    get groupings () {
      return self.itemGroups.map((itemGroup) => ({
        id: itemGroup.id,
        imageId: itemGroup.items[Math.floor(Math.random() * itemGroup.items.length)].id,
        name: itemGroup.name
      }))
    },
    get items () {
      return self.selected ? self.selected.items : []
    }
  }))
  .actions((self) => ({
    resetNav () {
      self.selected = '1'
    },
    select (groupId) {
      self.selected = groupId
    }
  }))

export default ItemGroups
