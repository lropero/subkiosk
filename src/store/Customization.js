import { types } from 'mobx-state-tree'

import CustomizationGroup from './CustomizationGroup'

const Customization = types.model('Customization', {
  id: types.identifier,
  group: types.reference(CustomizationGroup),
  name: types.string
})

export default Customization
