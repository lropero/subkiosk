import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { animated, config, useSpring } from 'react-spring'
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'

import background from 'SubKiosk/src/assets/images/background.png'
import buttonEatIn from 'SubKiosk/src/assets/images/button-eatIn.png'
import buttonTakeOut from 'SubKiosk/src/assets/images/button-takeOut.png'
import logo from 'SubKiosk/src/assets/images/logo-subway-white.png'

const Background = styled(animated(ImageBackground))`
  background-color: ${({ theme }) => theme.black};
  flex: 1;
`

const Black = styled.View`
  background-color: ${({ theme }) => theme.black};
  flex: 1;
`

const Buttons = styled(animated(View))`
  flex-direction: row;
`

const Logo = animated(View)

const Question = styled.Text`
  color: ${({ theme }) => theme.white};
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 400;
  letter-spacing: 2px;
  padding: 30px 0 50px;
`

const Wrapper = styled(animated(View))`
  align-items: center;
  flex: 1;
  justify-content: center;
`

const Start = (props) => {
  const fast = { friction: 50, mass: 1, tension: 500 }

  const [animationParams, setAnimationParams] = useState({
    opacity: 0,
    scale: 0.7,
    translateY: 50
  })

  const [pressed, setPressed] = useState(false)

  const { opacity } = useSpring({
    config: fast,
    from: { opacity: animationParams.opacity },
    native: true,
    onRest: pressed && (() => {
      props.navigation.dispatch(StackActions.reset({
        actions: [NavigationActions.navigate({ routeName: 'Welcome' })],
        index: 0
      }))
    }),
    to: { opacity: animationParams.opacity }
  })

  const { scale, translateY } = useSpring({
    config: config.wobbly,
    from: {
      scale: animationParams.scale,
      translateY: animationParams.translateY
    },
    native: true,
    to: {
      scale: animationParams.scale,
      translateY: animationParams.translateY
    }
  })

  useEffect(() => {
    setAnimationParams({
      opacity: 1,
      scale: 1,
      translateY: 0
    })
  }, [])

  const handlePress = () => {
    setAnimationParams({
      opacity: 0,
      scale: 0,
      translateY: 120
    })
    setPressed(true)
  }

  return (
    <Black>
      <Background source={background} style={{ opacity }}>
        <Wrapper style={{ opacity }}>
          <Logo style={{ transform: [{ scale }] }}>
            <Image source={logo} style={{ height: 80, width: 396 }} />
          </Logo>
          <Question>Where will you be eating today?</Question>
          <Buttons style={{ transform: [{ translateY }] }}>
            <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
              <Image
                resizeMode='contain'
                source={buttonEatIn}
                style={{ height: 400, marginRight: 50, width: 300 }}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
              <Image
                onPress={this.takeOut}
                resizeMode='contain'
                source={buttonTakeOut}
                style={{ height: 400, marginLeft: 50, width: 300 }}
              />
            </TouchableOpacity>
          </Buttons>
        </Wrapper>
      </Background>
    </Black>
  )
}

export default Start
