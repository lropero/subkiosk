import React from 'react'
import styled from 'styled-components/native'
import { inject, observer } from 'mobx-react/native'

import Catalogue from './Catalogue/Catalogue'
import Nav from './Nav/Nav'
import Order from './Order/Order'

const Main = styled.View`
  flex-direction: row;
  flex: 1;
`

const Wrapper = styled.View`
  background: ${({ theme }) => theme.black};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 10px;
`

const Homepage = ({ store }) => (
  <Wrapper>
    <Nav
      groupings={store.itemGroups.groupings}
      select={store.itemGroups.select}
      selected={store.itemGroups.selected.toJSON().id}
    />
    <Main>
      <Catalogue
        addItem={store.order.addItem}
        getItem={store.items.getItem}
        items={store.itemGroups.items}
      />
      <Order
        getItem={store.items.getItem}
        items={store.order.items}
        resetNav={store.itemGroups.resetNav}
        resetOrder={store.order.resetOrder}
        total={store.order.orderTotal}
      />
    </Main>
  </Wrapper>
)

export default inject('store')(observer(Homepage))
