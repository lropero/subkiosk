import { types } from 'mobx-state-tree'

import Customization from './Customization'

const Customizations = types
  .model('Customizations', {
    customizations: types.array(Customization)
  })

export default Customizations
