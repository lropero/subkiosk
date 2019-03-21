import React from 'React'
import styled from 'styled-components/native'
import { animated, config, Spring } from 'react-spring/renderprops-native'
import { Image, TouchableOpacity, View } from 'react-native'

import { getImage } from 'SubKiosk/src/helpers'

const Invisible = styled.View`
  background-color: transparent;
  margin: 10px;
  width: 262px;
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
  border-radius: 30px;
  margin: 10px 0;
  overflow: hidden;
  width: 262px;
`

const WrapperName = styled.View`
  background-color: ${({ theme }) => theme.green};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  justify-content: center;
  min-height: 62px;
  padding: 8px;
  width: 262px;
`

const Item = (props) => {
  const { imageId, isEmpty, name, openDetails } = props
  return !isEmpty ? (
    <TouchableOpacity activeOpacity={0.7} onPress={openDetails}>
      <Spring
        config={config.wobbly}
        from={{ opacity: 0, scale: 0.8 }}
        native
        to={{ opacity: 1, scale: 1 }}
      >
        {({ opacity, scale }) => (
          <Wrapper style={{ opacity, transform: [{ scale }] }}>
            <Image resizeMode='cover' source={getImage(imageId)} style={{ height: 200, width: 262 }} />
            <WrapperName>
              <Name>{name}</Name>
            </WrapperName>
          </Wrapper>
        )}
      </Spring>
    </TouchableOpacity>
  ) : <Invisible />
}

export default Item
