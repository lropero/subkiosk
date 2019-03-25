import Icon from 'react-native-vector-icons/FontAwesome'
import NumericInput from 'react-native-numeric-input'
import React, { useEffect, useRef, useState } from 'react'
import styled, { withTheme } from 'styled-components/native'
import { FlatList, TouchableOpacity } from 'react-native'

import Item from './Item'
import { Button } from 'SubKiosk/src/shared'
import { formatData, getImage } from 'SubKiosk/src/helpers'

const Back = styled.View`
  justify-content: center;
  padding-left: 20px;
`

const ItemDescription = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  padding: 10px 50px 50px 0;
`

const ItemDetails = styled.View`
  flex: 1;
`

const ItemName = styled.Text`
  color: ${({ theme }) => theme.black};
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 400;
  padding: 10px 100px 10px 0;
  text-align: center;
  width: 100%;
`

const Left = styled.View`
  align-items: center;
  width: 48%;
`

const Main = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  width: 100%;
`

const Picture = styled.Image`
  border-radius: 160px;
  height: 320px;
  width: 320px;
`

const Quantity = styled.Text`
  color: ${({ theme }) => theme.blackish};
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  margin-top: 20px;
  padding-bottom: 10px;
`

const Right = styled.View`
  width: 52%;
`

const Top = styled.View`
  display: flex;
  flex-direction: row;
`

const Wrapper = styled.View`
  background: ${({ theme }) => theme.white};
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  width: 78%;
`

const Catalogue = (props) => {
  const [quantity, setQuantity] = useState(1)
  const [showItem, setShowItem] = useState(false)

  const flatList = useRef()

  useEffect(() => {
    if (flatList.current) {
      flatList.current.scrollToIndex({ index: 0 })
    } else {
      resetItem()
    }
  }, [props.items])

  const renderItem = ({ item }) => {
    return (
      <Item
        imageId={item.id}
        isEmpty={!!item.empty}
        name={item.name}
        openDetails={() => setShowItem(item)}
      />
    )
  }

  const resetItem = () => {
    setQuantity(1)
    setShowItem(false)
  }

  return (
    <Wrapper>
      {showItem ? (
        <ItemDetails>
          <Top>
            <TouchableOpacity activeOpacity={0.7} onPress={resetItem}>
              <Back><Icon color={props.theme.green} name='angle-left' size={62} /></Back>
            </TouchableOpacity>
            <ItemName>{showItem.name}</ItemName>
          </Top>
          <Main>
            <Left>
              <Picture resizeMode='contain' source={getImage(showItem.id)} />
              <Quantity>Quantity</Quantity>
              <NumericInput
                borderColor={props.theme.green}
                editable={false}
                iconStyle={{ color: props.theme.white }}
                initValue={quantity}
                leftButtonBackgroundColor={props.theme.green}
                minValue={1}
                onChange={(qty) => setQuantity(qty)}
                rightButtonBackgroundColor={props.theme.green}
                rounded
                totalHeight={70}
              />
            </Left>
            <Right>
              <ItemDescription>{showItem.description}</ItemDescription>
              <Button
                backgroundColor={props.theme.green}
                borderColor={props.theme.green}
                borderRadius='10px'
                color={props.theme.white}
                fontSize='24px'
                height='70px'
                onPress={() => props.addItem(showItem.id, quantity)}
                text='ADD TO ORDER'
                width='300px'
              />
            </Right>
          </Main>
        </ItemDetails>
      ) : (
        <FlatList
          bounces={false}
          columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
          data={formatData(Object.values(props.items), 3)}
          keyExtractor={(item) => item.id}
          numColumns={3}
          ref={flatList}
          renderItem={renderItem}
        />
      )}
    </Wrapper>
  )
}

export default withTheme(Catalogue)
