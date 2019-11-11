import React from 'react'
import styled from 'styled-components/native'
import { animated, config, Spring } from 'react-spring/renderprops-native'
import { Image, TouchableOpacity, View } from 'react-native'

import { getImage } from 'subkiosk/src/helpers'

const Invisible = styled.View`
  background-color: transparent;
  margin: 10px;
  width: 332px;
`

const Name = styled.Text`
  color: ${({ theme }) => theme.white};
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  width: 100%;
`

const Wrapper = styled(animated(View))`
  align-items: center;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 18px;
  margin: 10px 0;
  overflow: hidden;
  width: 332px;
`

const WrapperName = styled.View`
  background-color: ${({ theme }) => theme.green};
  justify-content: center;
  min-height: 62px;
  padding: 8px;
  width: 332px;
`

const Item = ({ item, setShowItem }) => {
  return !item.empty ? (
    <TouchableOpacity activeOpacity={0.7} onPress={() => setShowItem(item)}>
      <Spring
        config={config.wobbly}
        from={{ opacity: 0, scale: 0.8 }}
        native
        to={{ opacity: 1, scale: 1 }}
      >
        {({ opacity, scale }) => (
          <Wrapper style={{ opacity, transform: [{ scale }] }}>
            <Image resizeMode='cover' source={getImage(item.id)} style={{ height: 270, width: 332 }} />
            <WrapperName>
              <Name>{item.name}</Name>
            </WrapperName>
          </Wrapper>
        )}
      </Spring>
    </TouchableOpacity>
  ) : <Invisible />
}

export default Item
