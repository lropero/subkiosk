import Icon from 'react-native-vector-icons/FontAwesome'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import styled, { withTheme } from 'styled-components/native'
import { animated, useSpring } from 'react-spring'
import { Easing, FlatList, ScrollView, TouchableOpacity, View } from 'react-native'

import Customization from './Customization'
import Item from './Item'
import { Button } from 'SubKiosk/src/shared'
import { formatData, getImage } from 'SubKiosk/src/helpers'

const Back = styled.View`
  justify-content: center;
  padding-left: 20px;
`

const Bottom = styled.View`
  align-items: flex-end;
  display: flex;
  padding: 20px;
  width: 100%;
`

const CustomizationGroup = styled.Text`
  color: ${({ theme }) => theme.black};
  font-family: Dancing Script;
  font-size: 42px;
  font-weight: 400;
  padding: 10px 20px;
`

const Customizations = styled(animated(View))`
  background-color: ${({ theme }) => theme.diegote};
  border-bottom-color: ${({ theme }) => theme.blackish};
  border-bottom-width: 1px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
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
  color: ${({ theme }) => theme.white};
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

const Right = styled.View`
  width: 52%;
`

const Top = styled.View`
  background-color: ${({ theme }) => theme.green};
  display: flex;
  flex-direction: row;
`

const Wrapper = styled.View`
  background: ${({ theme }) => theme.white};
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  width: 80%;
`

const WrapperCustomization = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 12px;
  padding: 0 0 10px 10px;
  width: 100%;
`

const Catalogue = (props) => {
  const [animationParams, setAnimationParams] = useState({ height: '0%' })
  const [showItem, setShowItem] = useState(false)

  const flatList = useRef()

  const { height } = useSpring({
    config: {
      duration: 800,
      easing: Easing.in((t) => Easing.bounce(t))
    },
    from: { height: animationParams.height },
    native: true,
    to: { height: animationParams.height }
  })

  useEffect(() => {
    if (flatList.current) {
      flatList.current.scrollToIndex({
        animated: false,
        index: 0
      })
    } else {
      resetItem()
    }
  }, [props.items])

  const renderItem = ({ item }) => (
    <Item
      item={item}
      setShowItem={setShowItem}
    />
  )

  const resetItem = () => {
    setAnimationParams({ height: '0%' })
    setShowItem(false)
  }

  const showCustomizations = () => {
    setAnimationParams({ height: '100%' })
  }

  return (
    <Wrapper>
      {showItem ? (
        <ItemDetails>
          <Customizations style={{ height }}>
            <Top>
              <TouchableOpacity activeOpacity={0.7} onPress={resetItem}>
                <Back><Icon color={props.theme.white} name='angle-left' size={62} /></Back>
              </TouchableOpacity>
              <ItemName>{showItem.name}</ItemName>
            </Top>
            <ScrollView>
              {showItem.customizationsAvailable && showItem.customizationGroups.map((customizationGroup, index) => (
                <Fragment key={index}>
                  <CustomizationGroup>{customizationGroup.name}</CustomizationGroup>
                  <WrapperCustomization>
                    {showItem.getCustomizations(customizationGroup.id).map((customization, index2) => (
                      <Customization
                        customization={customization}
                        key={index2}
                      />
                    ))}
                  </WrapperCustomization>
                </Fragment>
              ))}
              <Bottom>
                <Button
                  backgroundColor={props.theme.green}
                  borderColor={props.theme.green}
                  borderRadius='10px'
                  color={props.theme.white}
                  fontSize='24px'
                  height='70px'
                  onPress={() => props.addItem(showItem.id)}
                  text='ADD TO ORDER'
                  width='300px'
                />
              </Bottom>
            </ScrollView>
          </Customizations>
          <Top>
            <TouchableOpacity activeOpacity={0.7} onPress={resetItem}>
              <Back><Icon color={props.theme.white} name='angle-left' size={62} /></Back>
            </TouchableOpacity>
            <ItemName>{showItem.name}</ItemName>
          </Top>
          <Main>
            <Left>
              <Picture resizeMode='contain' source={getImage(showItem.id)} />
            </Left>
            <Right>
              <ItemDescription>{showItem.description || 'Lorem ipsum dolor sit amet consectetur adipiscing elit quis, cum nisi torquent malesuada tempus nibh augue.'}</ItemDescription>
              <Button
                backgroundColor={props.theme.green}
                borderColor={props.theme.green}
                borderRadius='10px'
                color={props.theme.white}
                fontSize='24px'
                height='70px'
                onPress={showItem.customizationsAvailable ? showCustomizations : () => props.addItem(showItem.id)}
                text={showItem.customizationsAvailable ? 'CUSTOMIZE' : 'ADD TO ORDER'}
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
