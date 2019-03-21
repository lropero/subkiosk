import React from 'React'
import styled from 'styled-components/native'
import { formatMoney } from 'accounting-js'

import { getImage } from 'SubKiosk/src/helpers'

const Icon = styled.Image`
  border-radius: 40px;
  height: 80px;
  width: 80px;
`

const Info = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
`

const Left = styled.View`
  align-items: center;
  width: 60px;
`

const Right = styled.View`
  justify-content: center;
  margin-left: 24px;
`

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
  width: 100%;
`

const Item = ({ item, quantity }) => {
  return (
    <Wrapper>
      <Left>
        <Icon resizeMode='contain' source={getImage(item.id)} />
      </Left>
      <Right>
        <Info>{`${quantity} x ${formatMoney(item.price)}`}</Info>
      </Right>
    </Wrapper>
  )
}

export default Item
