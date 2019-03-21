import _ from 'lodash'
import React from 'react'
import styled, { withTheme } from 'styled-components/native'
import { formatMoney } from 'accounting-js'
import { NavigationActions, StackActions, withNavigation } from 'react-navigation'
import { TouchableWithoutFeedback } from 'react-native'

import Item from './Item'
import { Button } from 'SubKiosk/src/shared'

const Bottom = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.yellow};
  border-top-color: ${({ theme }) => theme.darkYellow};
  border-top-width: 2px;
  flex: 0.3;
  justify-content: flex-end;
  width: 100%;
`

const Cancel = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  padding: 20px 0;
`

const SubTotal = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 10px;
`

const Top = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.yellow};
  flex: 0.7;
  width: 100%;
`

const Wrapper = styled.View`
  align-items: center;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  overflow: hidden;
  width: 22%;
`

const Order = ({ getItem, items, navigation, resetNav, resetOrder, theme, total }) => {
  const groupedItems = _.groupBy(items, 'id')
  return (
    <Wrapper>
      <Top>
        {Object.keys(groupedItems).map((itemId, index) => <Item item={getItem(itemId)} key={index} quantity={groupedItems[itemId].length} />)}
      </Top>
      <Bottom>
        <SubTotal>{`SUBTOTAL: ${formatMoney(total)}`}</SubTotal>
        <Button
          backgroundColor={theme.green}
          borderColor={theme.green}
          borderRadius='10px'
          color={theme.white}
          fontSize='24px'
          height='70px'
          onPress={() => total > 0 ? navigation.navigate('Review', { getItem, groupedItems, resetNav, resetOrder }) : null}
          text='CHECKOUT'
          width='200px'
        />
        <TouchableWithoutFeedback onPress={() => {
          navigation.dispatch(StackActions.reset({
            actions: [NavigationActions.navigate({ routeName: 'Welcome' })],
            index: 0
          }))
          resetNav()
          resetOrder()
        }}>
          <Cancel>CANCEL</Cancel>
        </TouchableWithoutFeedback>
      </Bottom>
    </Wrapper>
  )
}

export default withNavigation(withTheme(Order))
