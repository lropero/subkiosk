import React from 'React'
import styled from 'styled-components/native'
import { formatMoney } from 'accounting-js'

import { getImage } from 'SubKiosk/src/helpers'

const Icon = styled.Image`
  border-radius: 50px;
  height: 100px;
  width: 100px;
`

const Info = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  width: 100%;
`

const Left = styled.View`
  align-items: center;
  flex-direction: row;
  padding-left: 20px;
  width: 70%;
`

const Name = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  padding-left: 20px;
  width: 100%;
`

const Right = styled.View`
  justify-content: center;
  width: 30%;
`

const Wrapper = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;
`

const Item = ({ item, quantity }) => {
  return (
    <Wrapper>
      <Left>
        <Icon resizeMode='contain' source={getImage(item.id)} />
        <Name>{item.name}</Name>
      </Left>
      <Right>
        <Info>{`${quantity} x ${formatMoney(item.price)}`}</Info>
      </Right>
    </Wrapper>
  )
}

export default Item
