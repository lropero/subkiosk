import { types } from 'mobx-state-tree'

import Customization from './Customization'

const Item = types
  .model('Item', {
    id: types.identifier,
    name: types.string,
    description: types.maybe(types.string),
    price: types.number,
    customizationsAvailable: types.maybe(types.array(types.reference(Customization)))
  })
  .views((self) => ({
    get customizationGroups () {
      return [...new Set(self.customizationsAvailable.map((customization) => customization.group))]
    },
    getCustomizations (customizationGroupId) {
      return self.customizationsAvailable.filter((customization) => customization.group.id === customizationGroupId)
    }
  }))

export default Item
