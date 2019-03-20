import { createAppContainer, createStackNavigator } from 'react-navigation'

import { Start, Welcome } from 'SubKiosk/src/components'

const Navigator = createStackNavigator({
  Start: { screen: Start },
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
