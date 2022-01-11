import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import Home from '../screen/Home'
import {
  ProfileScreen,
  MessageScreen,
  StatisticScreen,
} from '../screen/AllScreens'

import CustomDrawer from '../components/CustomDrawer'

const Drawer = createDrawerNavigator()

const Menu = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { marginLeft: -10 },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='home-outline' size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='person-outline' size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Message'
        component={MessageScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='chatbox-ellipses-outline' size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Statistic'
        component={StatisticScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='analytics-outline' size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default Menu
