import React, { useState } from 'react'
import moment from 'moment'
import {
  View,
  Text,
  StyleSheet,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import CountDown from 'react-native-countdown-component'

//Components
import TimerSet from './TimerSet'

//dismiss keyboard
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const TimerDisplay = () => {
  const [show, setShow] = useState(true)
  const [timerOn, setTimerOn] = useState(false)

  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [saveHr, setSaveHr] = useState('')
  const [saveMin, setSaveMin] = useState('')
  const [alarmOn, setAlarmOn] = useState(false)

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        {show ? (
          <TimerSet
            hour={hour}
            setHour={setHour}
            min={min}
            setMin={setMin}
            saveHr={saveHr}
            setSaveHr={setSaveHr}
            saveMin={saveMin}
            setSaveMin={setSaveMin}
            alarmOn={alarmOn}
            setAlarmOn={setAlarmOn}
          />
        ) : (
          <Text style={styles.box}></Text>
        )}
        <CountDown
          until={60 * 60 * { saveHr }.saveHr + 60 * { saveMin }.saveMin + 0}
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
    </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
