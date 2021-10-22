import React from 'react'
import RNPickerSelect from 'react-native-picker-select'

//Dropdown Menu
import { churches, belong } from './DropdownMenus'

const DropdownSelect = () => {
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={churches}
      style={{ padding: 20, borderColor: 'red' }}
    />
  )
}

export default DropdownSelect
