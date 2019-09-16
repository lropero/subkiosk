import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { animated, useSpring } from 'react-spring'
import { Easing, Image, Text, TouchableWithoutFeedback, View } from 'react-native'

import logo from 'subkiosk/src/assets/images/logo-subway.png'

const Black = styled.View`
  background-color: ${({ theme }) => theme.black};
  flex: 1;
`

const Logo = animated(View)

const Order = styled(animated(Text))`
  color: ${({ theme }) => theme.yellow};
  font-family: Dancing Script;
  font-size: 58px;
  font-weight: 400;
  padding-top: 50px;
`

const Wrapper = styled(animated(View))`
  align-items: center;
  background-color: ${({ theme }) => theme.green};
  flex: 1;
  justify-content: center;
`

const Welcome = (props) => {
  const fast = { friction: 50, mass: 1, tension: 500 }

  const [animationParams, setAnimationParams] = useState({
    opacity: 0,
    rotateX: '180deg',
    scale: 0.7
  })
  const [orderScale, setOrderScale] = useState({
    from: 1,
    to: 1.1
  })
  const [pressed, setPressed] = useState(false)

  const { opacity } = useSpring({
    config: fast,
    from: { opacity: animationParams.opacity },
    native: true,
    onRest: pressed && (() => props.navigation.navigate('Start')),
    to: { opacity: animationParams.opacity }
  })
  const { rotateX, scale } = useSpring({
    config: {
      ...fast,
      duration: (!pressed && 800) || undefined,
      easing: Easing.in((t) => Easing.bounce(t))
    },
    from: {
      rotateX: animationParams.rotateX,
      scale: animationParams.scale
    },
    native: true,
    to: {
      rotateX: animationParams.rotateX,
      scale: animationParams.scale
    }
  })
  const orderSpring = useSpring({
    config: {
      duration: 800,
      easing: Easing.inOut((t) => Easing.quad(t))
    },
    from: { scale: orderScale.from },
    native: true,
    onRest: !pressed && (() => setOrderScale({
      from: orderScale.to,
      to: orderScale.from
    })),
    to: { scale: orderScale.to }
  })

  useEffect(() => {
    setAnimationParams({
      opacity: 1,
      rotateX: '0deg',
      scale: 1
    })
  }, [])

  const handlePress = () => {
    setAnimationParams({
      opacity: 0,
      rotateX: '70deg',
      scale: 0.7
    })
    setPressed(true)
  }

  return (
    <Black>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Wrapper style={{ opacity }}>
          <Logo style={Object.assign({}, { transform: [{ rotateX }, { scale }] })}>
            <Image
              source={logo}
              style={{
                height: 130,
                width: 643
              }}
            />
          </Logo>
          <Order style={Object.assign({}, { transform: [{ scale: orderSpring.scale }] })}>Order Here</Order>
        </Wrapper>
      </TouchableWithoutFeedback>
    </Black>
  )
}

export default Welcome
