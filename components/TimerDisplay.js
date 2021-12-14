import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import CountDown from 'react-native-countdown-component'

//Styles
import { Container } from '../appStyles/appStyles'

//Components
import TimerSet from './TimerSet'

const TimerDisplay = ({
  calculateHour,
  calculateMin,
  handleTime,
  handleSave,
}) => {
  const [show, setShow] = useState(true)
  const [timerOn, setTimerOn] = useState(false)

  return (
    <View style={styles.container}>
      {show ? <TimerSet /> : <Text style={styles.box}></Text>}
      <CountDown
        until={60 * 60 * 22 + 60 * 23 + 21}
        onFinish={() => alert('finished')}
        size={30}
        digitStyle={{
          backgroundColor: '#FFF',
          borderWidth: 2,
          borderColor: '#1CC625',
        }}
        digitTxtStyle={{ color: '#1CC625' }}
        timeLabelStyle={{ color: 'black', fontWeight: 'bold' }}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{ h: 'Hour', m: 'Min', s: 'Sec' }}
        separatorStyle={{ color: '#1CC625' }}
        showSeparator
        running={timerOn}
      />
      <View style={styles.button}>
        <Button
          title='Start/Stop'
          color='#f194ff'
          onPress={() => setTimerOn((timerOn) => !timerOn)}
        />
      </View>
      <View style={styles.button2}>
        <Button title='hide Timer settings' onPress={() => setShow(!show)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  box: {
    padding: 100,
  },
  button: {
    margin: 40,
  },
  button2: {
    backgroundColor: 'yellow',
    top: 50,
    width: 200,
    padding: 10,
    marginLeft: 90,
  },
})

export default TimerDisplay
