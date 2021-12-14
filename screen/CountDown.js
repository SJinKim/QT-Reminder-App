import React, { useState } from 'react'
import moment from 'moment'
import {
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Vibration,
  StyleSheet,
} from 'react-native'

//styles
import {
  StyledCDContainer,
  CDTimeSet,
  CDTimeSetHeading,
  CDDisplay,
  CDButton,
  CDTimeInput,
  CDAlarmTimeView,
  CDButtonSmall,
} from '../appStyles/appStyles'

//dismiss keyboard
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const CountDown = () => {
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [saveHr, setSaveHr] = useState('')
  const [saveMin, setSaveMin] = useState('')

  const [alarmOn, setAlarmOn] = useState(false)

  const currentHour = moment().format('HH')
  const currentMin = moment().format('mm')

  const overMin = 60 - -currentMin
  const overHour = currentHour - hour

  const a = (t) => {
    if (t >= currentHour) {
      return t - currentHour
    } else return 24 - overHour
  }

  const b = (z) => {
    if (z <= currentMin) {
      return currentMin - z
    } else return overMin - z
  }

  const countHour = a(hour)
  const countMin = b(min)

  const handleTime = (time, inputNum) => {
    if (inputNum == 1) {
      if ((time > 0 && time <= 24) || time == '') {
        setHour(time)
      } else return alert('Please enter valid number!')
    }
    if (inputNum == 2) {
      if ((time > 0 && time <= 60) || time == '') {
        setMin(time)
      } else return alert('Please enter valid number!')
    }
  }

  const handleSave = (hour, min) => {
    if (hour == '' || min == '') {
      return alert('please enter a time!')
    } else setSaveHr(hour)
    setSaveMin(min)
    setAlarmOn(true)
  }

  return (
    <DismissKeyboard>
      <StyledCDContainer>
        <CDTimeSet>
          <CDTimeSetHeading>Time Set</CDTimeSetHeading>
          <CDAlarmTimeView>
            <CDTimeInput
              keyboardType='numeric'
              onChangeText={(hour) => handleTime(hour, 1)}
              value={hour}
              placeholder={'hour'}
              maxLength={2}
            />
            <CDTimeInput
              keyboardType='numeric'
              onChangeText={(min) => handleTime(min, 2)}
              value={min}
              placeholder={'min'}
              maxLength={2}
            />
          </CDAlarmTimeView>
          <CDButtonSmall onPress={() => handleSave(hour, min)}>
            <Text style={styles.textSmall}>click to save</Text>
          </CDButtonSmall>
        </CDTimeSet>
        <CDDisplay>
          <CDTimeSetHeading>Countdown</CDTimeSetHeading>
          {alarmOn ? (
            <Text>
              Alarm1: {saveHr} : {saveMin}
            </Text>
          ) : (
            <Text>No Alarm set</Text>
          )}
          <Text>
            current Time: {currentHour} : {currentMin}
          </Text>
          <Text>
            remaining time to alarm: {a(saveHr)} : {b(saveMin)}
          </Text>
        </CDDisplay>
        <CDButton>
          <Text>Start</Text>
        </CDButton>
      </StyledCDContainer>
    </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  textSmall: {
    textAlign: 'center',
  },
})

export default CountDown
