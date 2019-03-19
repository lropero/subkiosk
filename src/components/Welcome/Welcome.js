import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const Wrapper = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`

const Welcome = () => (
  <Wrapper>
    <Text>WELCOME</Text>
  </Wrapper>
)

export default Welcome
