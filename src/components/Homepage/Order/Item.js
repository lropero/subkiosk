import React from 'React'
import styled from 'styled-components/native'
import { formatMoney } from 'accounting-js'

import { getImage } from 'SubKiosk/src/helpers'

const Customizations = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
`

const Icon = styled.Image`
  border-radius: 50px;
  height: 100px;
  width: 100px;
`

const Info = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
`

const Left = styled.View`
  align-items: center;
  width: 100px;
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

const Item = ({ customizations, item, quantity }) => {
  const { id, ...rest } = JSON.parse(customizations)
  const count = Object.keys(rest).reduce((acc, curr) => acc + rest[curr].length, 0)
  return (
    <Wrapper>
      <Left>
        <Icon resizeMode='contain' source={getImage(item.id)} />
      </Left>
      <Right>
        <Info>{`${quantity} x ${formatMoney(item.price)}`}</Info>
        {count > 0 && quantity === 1 && (<Customizations>{`${count} customizations`}</Customizations>)}
      </Right>
    </Wrapper>
  )
}

export default Item
