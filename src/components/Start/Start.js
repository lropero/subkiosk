import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { animated, config, useSpring } from 'react-spring'
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import background from 'subkiosk/src/assets/images/background.png'
import buttonEatIn from 'subkiosk/src/assets/images/button-eatIn.png'
import buttonTakeOut from 'subkiosk/src/assets/images/button-takeOut.png'
import logo from 'subkiosk/src/assets/images/logo-subway-white.png'

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

const Question = styled(animated(Text))`
  color: ${({ theme }) => theme.white};
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 400;
  padding: 30px 0 50px;
`

const Wrapper = styled(animated(View))`
  align-items: center;
  flex: 1;
  justify-content: center;
`

const Start = props => {
  const fast = { friction: 50, mass: 1, tension: 500 }

  const [animationParams, setAnimationParams] = useState({
    letterSpacing: 0,
    opacity: 0,
    scale: 0.7,
    translateY: 50
  })
  const [pressed, setPressed] = useState(false)

  const { opacity } = useSpring({
    config: fast,
    from: { opacity: animationParams.opacity },
    native: true,
    onRest: pressed && (() => props.navigation.navigate('Homepage')),
    to: { opacity: animationParams.opacity }
  })
  const { letterSpacing, scale, translateY } = useSpring({
    config: config.wobbly,
    from: {
      letterSpacing: animationParams.letterSpacing,
      scale: animationParams.scale,
      translateY: animationParams.translateY
    },
    native: true,
    to: {
      letterSpacing: animationParams.letterSpacing,
      scale: animationParams.scale,
      translateY: animationParams.translateY
    }
  })

  useEffect(() => {
    setAnimationParams({
      letterSpacing: 2,
      opacity: 1,
      scale: 1,
      translateY: 0
    })
  }, [])

  const handlePress = () => {
    setAnimationParams({
      letterSpacing: 5,
      opacity: 0,
      scale: 1.2,
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
          <Question style={{ letterSpacing }}>
            Where will you be eating today?
          </Question>
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
