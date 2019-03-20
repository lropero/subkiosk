import React, { useState } from 'react'
import styled from 'styled-components/native'
import { animated, useSpring } from 'react-spring'
import { Easing, Image, Text, TouchableWithoutFeedback, View } from 'react-native'

import logo from 'SubKiosk/src/assets/images/logo-subway.png'

const Black = styled.View`
  background-color: ${({ theme }) => theme.black};
  flex: 1;
`

const Logo = animated(View)

const Order = styled(animated(Text))`
  color: ${({ theme }) => theme.white};
  font-family: Montserrat;
  font-size: 38px;
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
  const [ pressed, setPressed ] = useState(false)
  const [ scaleFrom, setScaleFrom ] = useState(1)
  const [ scaleTo, setScaleTo ] = useState(1.1)
  const { opacity, rotateX, scale } = useSpring({
    config: { mass: 1, tension: 500, friction: 50, duration: (!pressed && 1000) || undefined, easing: Easing.in((t) => Easing.bounce(t)) },
    from: {
      opacity: 1,
      rotateX: '180deg',
      scale: pressed ? 1 : 0.7
    },
    native: true,
    onRest: pressed && (() => props.navigation.navigate('Start')),
    to: {
      opacity: pressed ? 0 : 1,
      rotateX: '0deg',
      scale: pressed ? 0.9 : 1
    }
  })
  const { opacity: opacity2, scale: scale2 } = useSpring({
    config: { mass: 1, tension: 500, friction: 50, duration: (!pressed && 1200) || undefined, easing: Easing.inOut((t) => Easing.cubic(t)) },
    from: {
      opacity: 1,
      scale: scaleFrom
    },
    native: true,
    onRest: !pressed && (() => {
      setScaleFrom(scaleTo)
      setScaleTo(scaleFrom)
    }),
    to: {
      opacity: pressed ? 0 : 1,
      scale: pressed ? 0.9 : scaleTo
    }
  })
  return (
    <Black>
      <TouchableWithoutFeedback onPress={() => setPressed(true)}>
        <Wrapper style={useSpring({
          config: { mass: 1, tension: 500, friction: 50 },
          from: { opacity: 1 },
          native: true,
          to: { opacity: pressed ? 0 : 1 }
        })}>
          <Logo style={Object.assign({}, { opacity }, { transform: [{ rotateX }, { scale }] })}>
            <Image
              source={logo}
              style={{
                height: 110,
                width: 544
              }}
            />
          </Logo>
          <Order style={Object.assign({}, { opacity: opacity2 }, { transform: [{ scale: scale2 }] })}>ORDER HERE</Order>
        </Wrapper>
      </TouchableWithoutFeedback>
    </Black>
  )
}

export default Welcome
