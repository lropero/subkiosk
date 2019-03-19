import { createAppContainer, createStackNavigator } from 'react-navigation'

import { Welcome } from 'SubKiosk/src/components'

const Navigator = createStackNavigator({
  Welcome: { screen: Welcome }
}, {
  defaultNavigationOptions: {
    gesturesEnabled: false
  },
  headerMode: 'none',
  initialRouteName: 'Welcome',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0
    }
  })
})

export default createAppContainer(Navigator)
