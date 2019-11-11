import React from 'react'
import styled from 'styled-components/native'
import { animated, useSpring } from 'react-spring'
import { Easing, Image, TouchableOpacity, View } from 'react-native'

import { getImage } from 'subkiosk/src/helpers'

const Name = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  width: 100%;
`

const Wrapper = styled(animated(View))`
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-color: ${({ clicked }) => clicked ? '#999' : 'transparent'};
  border-radius: 10px;
  border-width: 2px;
  margin: 10px 10px 0 0;
  overflow: hidden;
  width: 140px;
`

const WrapperName = styled.View`
  justify-content: center;
  min-height: 60px;
  padding: 0 8px 8px;
  width: 140px;
`

const Customization = ({ clicked, customization, setClicked }) => {
  const { scale } = useSpring({
    config: {
      duration: 800,
      easing: Easing.in((t) => Easing.bounce(t))
    },
    from: { scale: clicked ? 0.9 : 1 },
    native: true,
    to: { scale: clicked ? 0.9 : 1 }
  })

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={setClicked}>
      <Wrapper clicked={clicked} style={{ transform: [{ scale }] }}>
        <Image resizeMode='cover' source={getImage(customization.id, 'c')} style={{ height: 100, width: 100 }} />
        <WrapperName>
          <Name>{customization.name}</Name>
        </WrapperName>
      </Wrapper>
    </TouchableOpacity>
  )
}

export default Customization
