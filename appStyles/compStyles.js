import styled from 'styled-components'
import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height

//Timer
export const StyledNumbers = styled.Text`
  font-size: 90px;
  font-weight: bold;
`
export const StyledStartButton = styled.View`
  width: 100px;
  height: 100px;
  background-color: green;
  top: ${windowHeight * 0.8}px;
  border-radius: 40px;
`
