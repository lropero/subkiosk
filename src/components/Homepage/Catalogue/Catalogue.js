import hash from 'object-hash'
import Icon from 'react-native-vector-icons/FontAwesome'
import NumericInput from 'react-native-numeric-input'
import React, { PureComponent } from 'react'
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

const Qty = styled.Text`
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

class Catalogue extends PureComponent {
  constructor () {
    super()
    this.state = {
      showDetails: false
    }
    this.openDetails = this.openDetails.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  componentDidUpdate (prevProps) {
    const { items } = this.props
    if (hash(items) !== hash(prevProps.items)) {
      this.setState({ showDetails: false })
      delete this.qty
      setTimeout(() => {
        this.flatList.scrollToIndex({ index: 0 })
      }, 50)
    }
  }

  openDetails (itemId) {
    const { getItem } = this.props
    delete this.qty
    this.item = getItem(itemId)
    this.setState({ showDetails: itemId })
  }

  renderItem ({ item }) {
    return (
      <Item
        imageId={item.id}
        isEmpty={!!item.empty}
        name={item.name}
        openDetails={() => this.openDetails(item.id)}
      />
    )
  }

  render () {
    const { addItem, items, theme } = this.props
    return (
      <Wrapper>
        {this.state.showDetails ? (
          <ItemDetails>
            <Top>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.setState({ showDetails: false })}>
                <Back><Icon color={theme.green} name='angle-left' size={62} /></Back>
              </TouchableOpacity>
              <ItemName>{this.item.name}</ItemName>
            </Top>
            <Main>
              <Left>
                <Picture resizeMode='contain' source={getImage(this.state.showDetails)} />
                <Qty>Quantity</Qty>
                <NumericInput
                  borderColor={theme.green}
                  editable={false}
                  iconStyle={{ color: theme.white }}
                  initValue={1}
                  leftButtonBackgroundColor={theme.green}
                  minValue={1}
                  onChange={(qty) => { this.qty = qty }}
                  rightButtonBackgroundColor={theme.green}
                  rounded
                  totalHeight={70}
                />
              </Left>
              <Right>
                <ItemDescription>{this.item.description}</ItemDescription>
                <Button
                  backgroundColor={theme.green}
                  borderColor={theme.green}
                  borderRadius='10px'
                  color={theme.white}
                  fontSize='24px'
                  height='70px'
                  onPress={() => addItem(this.item.id, this.qty || 1)}
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
            data={formatData(Object.values(items), 3)}
            keyExtractor={(item) => item.id}
            numColumns={3}
            ref={ref => { this.flatList = ref }}
            renderItem={this.renderItem}
          />
        )}
      </Wrapper>
    )
  }
}

export default withTheme(Catalogue)
