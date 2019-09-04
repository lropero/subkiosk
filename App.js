import React from 'react'
import { Provider } from 'mobx-react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import Navigator from 'SubKiosk/src/Navigator'
import store from 'SubKiosk/src/store'
import theme from 'SubKiosk/src/utils/theme'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <StatusBar hidden />
        <Navigator />
      </>
    </ThemeProvider>
  </Provider>
)

export default App
