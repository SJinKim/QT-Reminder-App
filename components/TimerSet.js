import React, { useState } from 'react'
import {
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Vibration,
  StyleSheet,
} from 'react-native'
import moment from 'moment'

//styles
import {
  StyledCDContainer,
  CDTimeSet,
  CDTimeSetHeading,
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

const TimerSet = () => {
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [saveHr, setSaveHr] = useState('')
  const [saveMin, setSaveMin] = useState('')

  const currentHour = moment().format('HH')
  const currentMin = moment().format('mm')

  const overMin = 60 - -currentMin
  const overHour = currentHour - hour

  const calculateHour = (t) => {
    if (t >= currentHour) {
      return t - currentHour
    } else return 24 - overHour
  }

  const calculateMin = (z) => {
    if (z <= currentMin) {
      return currentMin - z
    } else return overMin - z
  }

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
  }

  return (
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
    </StyledCDContainer>
  )
}

const styles = StyleSheet.create({
  textSmall: {
    textAlign: 'center',
  },
})

export default TimerSet
