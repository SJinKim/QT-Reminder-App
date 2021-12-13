import React, { useState } from 'react'
import moment from 'moment'
import {
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import { Vibration } from 'react-native'

//styles
import {
  StyledCDContainer,
  CDTimeSet,
  CDTimeSetHeading,
  CDDisplay,
  CDButton,
  CDTimeInput,
} from '../appStyles/appStyles'

//Components
import TimerDisplay from '../components/TimerDisplay'
import TimerButtons from '../components/TimerButtons'
import TimerHeader from '../components/TimerHeader'
import { useEffect } from 'react/cjs/react.development'

//dismiss keyboard
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const CountDown = () => {
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')

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

  useEffect(() => {}, [hour])

  return (
    <DismissKeyboard>
      <StyledCDContainer>
        <CDTimeSet>
          <CDTimeSetHeading>Time Set</CDTimeSetHeading>
          <CDTimeInput
            keyboardType='numeric'
            onChangeText={(hour) => setHour(hour)}
            value={hour}
            placeholder={'set hour'}
            maxLength={2}
          />
          <CDTimeInput
            keyboardType='numeric'
            onChangeText={(min) => setMin(min)}
            value={min}
            placeholder={'set min'}
            maxLength={2}
          />
        </CDTimeSet>
        <CDDisplay>
          <CDTimeSetHeading>Countdown</CDTimeSetHeading>
          <Text>
            alarm set: {hour} : {min}
          </Text>
          <Text>
            current Time: {currentHour} : {currentMin}
          </Text>
          <Text>
            countdown: {a(hour)} : {b(min)}
          </Text>
        </CDDisplay>
        <CDButton>
          <Text>Start</Text>
        </CDButton>
      </StyledCDContainer>
    </DismissKeyboard>
  )
}

export default CountDown
