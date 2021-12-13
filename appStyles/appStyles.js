import styled from 'styled-components'
import Constants from 'expo-constants'
import { Dimensions } from 'react-native'

const StatusBarHeight = Constants.statusBarHeight
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

//colors
export const Colors = {
  primary: '#ffffff',
  secondary: '#000000',
  tertiary: '#1F2937',
  lightGrey: '#E5E7EB',
  darkLight: '#9CA3AF',
  brand: '#6D28D9',
  green: '#10B981',
  red: '#EF4444',
}

const {
  primary,
  secondary,
  tertiary,
  lightGrey,
  darkLight,
  brand,
  green,
  red,
} = Colors

//Login
export const Container = styled.View`
  flex: 1;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};
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
  color: ${secondary};
  padding: 10px;
`

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${secondary};
`
export const StyledFormArea = styled.View`
  width: 90%;
`

export const StyledTextInput = styled.TextInput`
  background-color: ${lightGrey};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  height: 65px;
  margin-bottom: 10px;
  color: ${tertiary};
`

export const StyledView = styled.View`
  background-color: ${lightGrey};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  height: 65px;
  margin-bottom: 10px;
  color: ${tertiary};
`

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  border-radius: 5px;
  height: 60px;
`

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  text-align: center;
`

export const MessageBox = styled.Text`
  text-align: center;
  font-size: 13px;
`

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`

//TextInput
export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`

export const LeftIcon = styled.View`
  left: 15px;
  top: 35px;
  position: absolute;
  z-index: 1;
`

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
`

export const StyledBlankParagraph = styled.View``

//Home
export const StyledBox = styled.View`
  background-color: ${green};
  flex: 0.4;
  align-items: center;
  justify-content: center;
  margin-top: 50%;
`

export const StyledFooter = styled.View`
  background-color: ${lightGrey};
  border-color: ${secondary};
  padding: 20px;
  width: ${windowWidth * 0.88}px;
  top: 320px;
`

export const StyledHeaderContainer = styled.View`
  background-color: ${lightGrey};
  margin-top: ${StatusBarHeight}px;
  padding: 20px;
`

export const LeftClickableIcon = styled.TouchableOpacity`
  left: 15px;
  top: 35px;
  position: absolute;
`
//Signup
export const StyledDropdownContainer = styled.View`
  justify-content: center;
  margin-left: 50px;
  margin-top: 9px;
`

//CountDown
export const StyledCDContainer = styled.View`
  flex: 1;
  width: auto;
  height: auto;
  justify-content: space-around;
  align-items: center;
`

export const CDTimeSet = styled.View`
  border: 1px solid black;
  padding: 30px;
  width: 80%;
`

export const CDTimeSetHeading = styled.Text`
  padding-left: 30%;
  margin-bottom: 10px;
  border: 1px solid black;
`

export const CDDisplay = styled.View`
  border: 1px solid black;
  padding: 30px;
  width: 80%;
  height: 20%;
  background-color: skyblue;
`

export const CDButton = styled.TouchableOpacity`
  border: 1px solid black;
  border-radius: 50px;
  width: 95px;
  height: 95px;
  padding: 30px;
`

export const CDTimeInput = styled.TextInput`
  border: 1px solid black;
  padding: 10px;
  margin-top: 20px;
`
