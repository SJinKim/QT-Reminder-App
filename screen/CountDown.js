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

//dismiss keyboard
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const CountDown = () => {
  const [running, setRunning] = useState(false)
  const [number, setNumber] = useState(null)

  const currentTime = moment().format('h:mm:ss a')

  return (
    <DismissKeyboard>
      <StyledCDContainer>
        <CDTimeSet>
          <CDTimeSetHeading>TimeSet</CDTimeSetHeading>
          <CDTimeInput
            keyboardType='numeric'
            onChangeText={setNumber}
            value={number}
            placeholder={'set time here'}
          />
        </CDTimeSet>
        <CDDisplay>
          <CDTimeSetHeading>Countdown</CDTimeSetHeading>
          <Text>{currentTime}</Text>
        </CDDisplay>
        <CDButton>
          <Text>Start</Text>
        </CDButton>
      </StyledCDContainer>
    </DismissKeyboard>
  )
}

export default CountDown
