import { types } from 'mobx-state-tree'

import Group from './Group'

const Groups = types
  .model('Groups', {
    groups: types.array(Group),
    selected: types.reference(Group)
  })
  .views((self) => ({
    get groupings () {
      return self.groups.map((group) => ({
        id: group.id,
        imageId: group.items[Math.floor(Math.random() * group.items.length)].id,
        name: group.name
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

export default Groups
