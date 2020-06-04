import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

import { getImage } from 'subkiosk/src/helpers'

const Icon = styled.Image`
  border-radius: 75px;
  height: 150px;
  width: 150px;
`

const Name = styled.Text`
  color: ${({ theme }) => theme.white};
  flex: 1;
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 400;
  text-align: center;
`

const Wrapper = styled.View`
  align-items: center;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.yellow : theme.green};
  border-left-color: ${({ theme }) => theme.darkGreen};
  border-left-width: ${({ isFirst }) => (isFirst ? 0 : '2px')};
  border-right-color: ${({ theme }) => theme.darkGreen};
  border-right-width: ${({ isLast }) => (isLast ? 0 : '2px')};
  flex-direction: row;
  flex: 1;
  padding: 0 30px;
  width: 400px;
`

const Grouping = props => {
  const { imageId, isFirst, isLast, isSelected, name, selectGroup } = props
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={selectGroup}>
      <Wrapper isFirst={isFirst} isLast={isLast} isSelected={isSelected}>
        <Icon resizeMode='contain' source={getImage(imageId)} />
        <Name>{name}</Name>
      </Wrapper>
    </TouchableOpacity>
  )
}

export default Grouping
