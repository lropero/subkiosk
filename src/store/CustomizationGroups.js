import { types } from 'mobx-state-tree'

import CustomizationGroup from './CustomizationGroup'

const CustomizationGroups = types.model('CustomizationGroups', {
  customizationGroups: types.array(CustomizationGroup)
})

export default CustomizationGroups
