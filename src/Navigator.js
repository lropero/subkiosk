import { createAppContainer, createStackNavigator } from 'react-navigation'

import { Homepage, Review, Start, Welcome } from 'SubKiosk/src/components'

const Navigator = createStackNavigator({
  Homepage: { screen: Homepage },
  Review: { screen: Review },
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
