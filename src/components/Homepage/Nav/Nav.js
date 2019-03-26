import React from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

import Grouping from './Grouping'

const Wrapper = styled.View`
  height: 220px;
  padding-bottom: 10px;
`

const Nav = ({ groupings, select, selected }) => {
  return (
    <Wrapper>
      <ScrollView bounces={false} horizontal style={{ borderRadius: 10 }}>
        {groupings.map((grouping, index) => (
          <Grouping
            imageId={grouping.imageId}
            isFirst={index === 0}
            isLast={index === groupings.length - 1}
            isSelected={index === parseInt(selected, 10) - 1}
            key={grouping.id}
            name={grouping.name}
            selectGroup={() => select(grouping.id)}
          />
        ))}
      </ScrollView>
    </Wrapper>
  )
}

export default Nav
