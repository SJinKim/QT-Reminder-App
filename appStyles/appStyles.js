import styled from 'styled-components'
import Constants from 'expo-constants'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'

const StatusBarHeight = Constants.statusBarHeight

//colors
export const colors = {
  primary: '#ffffff',
  secondary: '#000000',
}

//Login
export const Container = styled.View`
  flex: 1;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${colors.primary};
  padding: 25px;
`
export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`

export const PageLogo = styled.Image`
  width: 250px;
  height: 150px;
  margin-top: 30px;
`

export const PageTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: ${colors.secondary};
  padding: 10px;
`

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${colors.secondary};
`
