import React from 'react'
import { Text } from 'react-native'

//Components
import TimerDisplay from '../components/TimerDisplay'

//icons
import { MaterialIcons, Entypo } from '@expo/vector-icons'

//styled
import {
  Container,
  StyledBox,
  StyledFooter,
  RightIcon,
  LeftClickableIcon,
} from '../appStyles/appStyles'

const Home = () => {
  return (
    <Container>
      <LeftClickableIcon style={{ marginTop: 26, marginLeft: 10 }}>
        <Entypo name='menu' size={40} color='black' />
      </LeftClickableIcon>
      <RightIcon style={{ marginTop: 20 }}>
        <MaterialIcons name='star-border' size={40} color='black' />
      </RightIcon>
      <StyledBox>
        <TimerDisplay hour={23} min={59} sec={59} />
      </StyledBox>
      <StyledFooter>
        <Text>한마음 교회 특별 새벽기도회 21.08.21 - 21.09.12</Text>
      </StyledFooter>
    </Container>
  )
}

export default Home
