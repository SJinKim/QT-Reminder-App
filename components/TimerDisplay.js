import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import CountDown from 'react-native-countdown-component'

const TimerDisplay = ({ hour, min, sec }) => {
  const [timerOn, setTimerOn] = useState(false)

  return (
    <View>
      <CountDown
        until={60 * 60 * 22 + 60 * 22 + 50}
        onFinish={() => alert('finished')}
        onPress={() => alert('hi')}
        size={20}
        digitStyle={{ backgroundColor: '#FFF' }}
        digitTxtStyle={{ color: '#1CC625' }}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{ h: 'HH', m: 'MM', s: 'SS' }}
        running={timerOn}
      />
      <Button
        title='Start/Stop'
        onPress={() => setTimerOn((timerOn) => !timerOn)}
      />
    </View>
  )
}

export default TimerDisplay
