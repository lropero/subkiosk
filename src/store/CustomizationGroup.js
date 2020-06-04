import { types } from 'mobx-state-tree'

const CustomizationGroup = types.model('CustomizationGroup', {
  id: types.identifier,
  name: types.string,
  maximum: types.integer,
  minimum: types.integer
})

export default CustomizationGroup
