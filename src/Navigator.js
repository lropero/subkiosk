import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Homepage, Review, Start, Welcome } from 'subkiosk/src/components'

const Navigator = createStackNavigator(
  {
    Homepage: { screen: Homepage },
    Review: { screen: Review },
    Start: { screen: Start },
    Welcome: { screen: Welcome }
  },
  {
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
  }
)

export default createAppContainer(Navigator)
