import React from 'react'
import { Provider } from 'mobx-react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import Navigator from 'subkiosk/src/Navigator'
import store from 'subkiosk/src/store'
import theme from 'subkiosk/src/utils/theme'

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
