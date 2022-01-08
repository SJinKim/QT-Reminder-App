import React, { useState } from 'react'
import {
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Vibration,
  StyleSheet,
  Button,
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

const TimerSet = ({
  hour,
  min,
  setHour,
  setMin,
  saveHr,
  setSaveHr,
  saveMin,
  setSaveMin,
  alarmOn,
  setAlarmOn,
}) => {
  //constants
  const currentHour = moment().format('HH')
  const currentMin = moment().format('mm')

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

  const hourCounter = (num) => {
    var counter = 0

    while (num > 60) {
      num = num - 60
      counter++
    }
    return counter
  }

  const calculateTime = (hr, min) => {
    var totalHourMin = hr * 60 - -min
    var currentHourMin = currentHour * 60 - -currentMin

    var newTimeMin = 0

    if (totalHourMin > currentHourMin) {
      newTimeMin = totalHourMin - currentHourMin
      console.log('this is newTimeMin:', newTimeMin)
      if (newTimeMin < 60) {
        setSaveHr(0)
        setSaveMin(newTimeMin)
      } else setSaveHr(hourCounter(newTimeMin))
      setSaveMin(newTimeMin - hourCounter(newTimeMin) * 60)
      console.log('saveHr:', { saveHr }.saveHr, 'saveMin:', { saveMin }.saveMin)
    }
  }

  const handleSave = (hour, min) => {
    if (hour >= 0 && min >= 0) {
      calculateTime(hour, min)
      setAlarmOn(!alarmOn)
    } else return alert('please enter a time!')
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
