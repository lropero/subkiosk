import React, { Fragment } from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import Navigator from 'SubKiosk/src/Navigator'
import theme from 'SubKiosk/src/utils/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <StatusBar hidden />
      <Navigator />
    </Fragment>
  </ThemeProvider>
)

export default App
