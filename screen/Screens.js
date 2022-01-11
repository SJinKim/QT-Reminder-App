import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Screens = ({ pages }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text} pages={pages}>
        {pages} Screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  text: {
    color: '#161924',
    fontSize: 20,
    fontWeight: '500',
  },
})

export default Screens
