import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'

//Components
import Home from './screen/Home'
import Login from './screen/Login'
import Signup from './screen/Signup'
import TimerDisplay from './components/TimerDisplay'
import TimerSet from './components/TimerSet'

export default function App() {
  return <Signup />
}
