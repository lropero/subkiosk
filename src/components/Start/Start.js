import React from 'react'
import styled from 'styled-components/native'
import { animated, useSpring } from 'react-spring'
import { ImageBackground } from 'react-native'

import background from 'SubKiosk/src/assets/images/background.png'

const Background = animated(ImageBackground)

const Black = styled.View`
  background-color: ${({ theme }) => theme.black};
  flex: 1;
`

const Start = () => {
  const { opacity } = useSpring({
    config: { mass: 1, tension: 500, friction: 50 },
    from: { opacity: 0 },
    native: true,
    to: { opacity: 1 }
  })
  return (
    <Black>
      <Background source={background} style={Object.assign({}, { backgroundColor: 'black', flex: 1 }, { opacity })} />
    </Black>
  )
}

export default Start
