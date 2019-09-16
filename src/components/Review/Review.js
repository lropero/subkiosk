import React, { PureComponent } from 'react'
import styled from 'styled-components/native'
import { animated, config, Spring } from 'react-spring/renderprops-native'
import { Image, ImageBackground, Text, View } from 'react-native'
import { NavigationActions, StackActions, withNavigation } from 'react-navigation'

import Item from './Item'
import background from 'subkiosk/src/assets/images/background.png'
import logo from 'subkiosk/src/assets/images/logo-subway.png'

const Order = styled(animated(View))`
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  padding: 20px 20px 0;
  width: 80%;
`

const Statement = styled(animated(Text))`
  color: ${({ theme }) => theme.white};
  font-family: Montserrat;
  font-size: 42px;
  font-weight: 400;
  letter-spacing: 3px;
  padding: 30px 0 50px;
`

const Wrapper = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`

class Review extends PureComponent {
  componentDidMount () {
    const { navigation } = this.props
    const resetNav = navigation.getParam('resetNav')
    const resetOrder = navigation.getParam('resetOrder')
    setTimeout(() => {
      navigation.dispatch(StackActions.reset({
        actions: [NavigationActions.navigate({ routeName: 'Welcome' })],
        index: 0
      }))
      resetNav()
      resetOrder()
    }, 8000)
  }

  render () {
    const { navigation } = this.props
    const getItem = navigation.getParam('getItem')
    const groupedItems = navigation.getParam('groupedItems')
    return (
      <ImageBackground source={background} style={{ backgroundColor: 'black', flex: 1 }}>
        <Wrapper>
          <Image source={logo} style={{ height: 80, width: 396 }} />
          <Spring
            config={config.slow}
            from={{ opacity: 0 }}
            native
            to={{ opacity: 1 }}
          >
            {(props) => (
              <Statement style={props}>Please review your order</Statement>
            )}
          </Spring>
          <Spring
            config={config.slow}
            from={{ opacity: 0, translateY: 80 }}
            native
            to={{ opacity: 1, translateY: 0 }}
          >
            {({ translateY, ...props }) => (
              <Order style={{ ...props, transform: [{ translateY }] }}>
                {Object.keys(groupedItems).map((itemId) => <Item item={getItem(itemId)} key={itemId} quantity={groupedItems[itemId].length} />)}
              </Order>
            )}
          </Spring>
        </Wrapper>
      </ImageBackground>
    )
  }
}

export default withNavigation(Review)
