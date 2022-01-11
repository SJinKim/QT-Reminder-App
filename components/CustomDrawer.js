import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'
import { AuthContext } from '../context'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'

import Ionicons from 'react-native-vector-icons/Ionicons'

const CustomDrawer = (props) => {
  const navigation = useNavigation()

  //authcontext
  const { signOut } = useContext(AuthContext)

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        signOut()
        navigation.navigate('Login')
      })
      .catch((error) => alert(error.message))
  }
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#8200d6' }}
      >
        <ImageBackground
          source={require('../assets/menu-bg.jpeg')}
          style={{ padding: 20 }}
        >
          <Image
            source={require('../assets/user-profile-avatar.png')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text style={{ color: '#FFF', fontSize: 15 }}>
            {auth.currentUser?.email}
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='share-social-outline' size={22} />
            <Text style={{ marginLeft: 10 }}>Share Content</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSignOut()}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='exit-outline' size={22} />
            <Text style={{ marginLeft: 10 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer
