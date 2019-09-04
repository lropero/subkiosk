import React from 'react'
import styled from 'styled-components/native'

const StyledButton = styled.TouchableHighlight`
  align-items: center;
  background-color:  ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ borderColor }) => borderColor ? `1px solid ${borderColor}` : 0};
  display: flex;
  height: ${({ height }) => height};
  justify-content: center;
  shadow-color: ${({ shadowColor }) => shadowColor};
  shadow-offset: ${({ shadowColor }) => shadowColor ? '0 5px' : 0};
  shadow-opacity: ${({ shadowColor }) => shadowColor ? 0.15 : 0};
  shadow-radius: ${({ shadowColor }) => shadowColor ? '6px' : 0};
  width: ${({ width }) => width};
`

const Text = styled.Text`
  color: ${({ color }) => color};
  font-family: Montserrat;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
`

const Button = (props) => {
  const { backgroundColor, borderColor, borderRadius, color, fontSize, height, onPress, shadowColor, text, width } = props
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      height={height}
      onPress={onPress}
      shadowColor={shadowColor}
      width={width}
    >
      <Text
        color={color}
        fontSize={fontSize}
      >{text}
      </Text>
    </StyledButton>
  )
}

Button.defaultProps = {
  backgroundColor: 'red',
  borderColor: 'black',
  borderRadius: '20px',
  color: 'yellow',
  fontSize: '30px',
  height: '120px',
  onPress: () => {},
  shadowColor: 'black',
  text: 'Text',
  width: '20%'
}

export default Button
