import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Components
import Home from './screen/Home'
import Login from './screen/Login'
import Signup from './screen/Signup'
import TimerDisplay from './components/TimerDisplay'
import TimerSet from './components/TimerSet'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false}} name="Signup" component={Signup} />
        <Stack.Screen options={{ headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false}} name="Countdown" component={CountDown} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}
