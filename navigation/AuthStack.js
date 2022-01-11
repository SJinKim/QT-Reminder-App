import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Drawer
import Menu from './Drawer'

//Components
import Login from '../screen/Login'
import Signup from '../screen/Signup'
import Home from '../screen/Home'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default AuthStack
