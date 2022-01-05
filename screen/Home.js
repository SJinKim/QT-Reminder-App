import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import CountDown from 'react-native-countdown-component'
import moment from 'moment'

//icons
import { MaterialIcons, Entypo } from '@expo/vector-icons'

//styled
import {
  Container,
  StyledBox,
  StyledFooter,
  RightIcon,
  LeftClickableIcon,
  TimerFrameView,
  StyledTimerFrame,
  TimeInput,
  ButtonChange,
  FrameViewOne,
} from '../appStyles/appStyles'

const Home = () => {
  const [timerOn, setTimerOn] = useState(false)
  const [timerShow, setTimerShow] = useState(true)
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')

  const handleTime = (time, inputNum) => {
    if (inputNum == 1) {
      if ((time >= 0 && time <= 24) || time == '') {
        setHour(time)
      } else return alert('Please enter valid number!')
    }
    if (inputNum == 2) {
      if ((time >= 0 && time <= 60) || time == '') {
        setMin(time)
      } else return alert('Please enter valid number!')
    }
  }

  return (
    <Container>
      <LeftClickableIcon style={{ marginTop: 26, marginLeft: 10 }}>
        <Entypo name='menu' size={40} color='black' />
      </LeftClickableIcon>
      <RightIcon style={{ marginTop: 20 }}>
        <MaterialIcons name='star-border' size={40} color='black' />
      </RightIcon>
      <View style={styles.timerContainer}>
        {timerShow ? (
          <FrameViewOne>
            <CountDown
              until={60 * 60 * hour + 60 * min + 0}
              onFinish={() => alert('finished')}
              size={35}
              timeToShow={['H', 'M', 'S']}
              digitStyle={{
                backgroundColor: '#FFF',
                borderWidth: 2,
                borderColor: '#1CC625',
              }}
              showSeparator
              running={timerOn}
            />
            <ButtonChange onPress={() => setTimerShow(!timerShow)}>
              <Text>set Timer</Text>
            </ButtonChange>
            <ButtonChange onPress={() => setTimerOn(!timerOn)}>
              <Text>Start / Stop</Text>
            </ButtonChange>
          </FrameViewOne>
        ) : (
          <TimerFrameView>
            <StyledTimerFrame>
              <TimeInput
                keyboardType='numeric'
                onChangeText={(hour) => handleTime(hour, 1)}
                value={hour}
                placeholder={'hour'}
                maxLength={2}
              />
              <TimeInput
                keyboardType='numeric'
                onChangeText={(min) => handleTime(min, 2)}
                value={min}
                placeholder={'min'}
                maxLength={2}
              />
            </StyledTimerFrame>
            <ButtonChange onPress={() => setTimerShow(!timerShow)}>
              <Text>return to Timer</Text>
            </ButtonChange>
          </TimerFrameView>
        )}
      </View>
      <StyledFooter>
        <Text>한마음 교회 특별 새벽기도회 21.08.21 - 21.09.12</Text>
      </StyledFooter>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
})
