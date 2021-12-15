import React from 'react'
import { Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'

//Components
import TimerDisplay from '../components/TimerDisplay'

//icons
import { MaterialIcons, Entypo } from '@expo/vector-icons'

//styled
import {
  Container,
  StyledBox,
  StyledButton,
  ButtonText,
  StyledFooter,
  RightIcon,
  LeftClickableIcon,
} from '../appStyles/appStyles'
import { View } from 'react-native-web'

const Home = () => {

  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  return (
    <Container>
      <LeftClickableIcon style={{ marginTop: 26, marginLeft: 10 }}>
        <Entypo name='menu' size={40} color='black' />
      </LeftClickableIcon>
      <RightIcon style={{ marginTop: 20 }}>
        <MaterialIcons name='star-border' size={40} color='black' />
      </RightIcon>
      <StyledBox>
        <TimerDisplay hour={22} min={23} sec={0} />
      </StyledBox>
      <StyledFooter>
        <Text>한마음 교회 특별 새벽기도회 21.08.21 - 21.09.12</Text>
        <Text>Email: {auth.currentUser?.email}</Text>
      </StyledFooter>
      <StyledButton onPress={handleSignOut}>
        <ButtonText>Sign Out</ButtonText>
      </StyledButton>
    </Container>
  )
}

export default Home
