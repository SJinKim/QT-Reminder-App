import React from 'react'
import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

const Menu = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="CountDown"
                    component={CountDown}
                />
                <Drawer.Screen
                    name="Login"
                    component={Login}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Menu