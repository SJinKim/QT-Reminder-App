import React, { useState, useEffect, useMemo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { auth } from './firebase'
import { AuthContext } from './context'

//screen
import Loading from './screen/Loading'

import Menu from './navigation/Drawer'
import AuthStack from './navigation/AuthStack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// const RootStack = createNativeStackNavigator()
// const RootStackScreen = ({ userToken }) => (
//   <RootStack.Navigator screenOptions={{ headerShown: false }}>
//     {userToken ? (
//       <RootStack.Screen name='Auth' component={AuthStack} />
//     ) : (
//       <RootStack.Screen name='Main' component={Menu} />
//     )}
//   </RootStack.Navigator>
// )

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)

  const authContext = useMemo(() => {
    return {
      login: () => {
        setIsLoading(false)
        setUserToken(auth.currentUser)
      },
      signUp: () => {
        setIsLoading(false)
        setUserToken(auth.currentUser)
      },
      signOut: () => {
        setIsLoading(false)
        setUserToken(null)
      },
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? <Menu /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
