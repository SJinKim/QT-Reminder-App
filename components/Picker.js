import React from 'react'
import RNPickerSelect from 'react-native-picker-select'

const Pickerv1 = () => {
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={[
        { label: 'Football', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
      ]}
    />
  )
}

export default Pickerv1
