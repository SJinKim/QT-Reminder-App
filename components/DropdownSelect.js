import React from 'react'
import { Platform } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

//Dropdown Menu
import { churches, belong } from './DropdownMenus'

const DropdownSelect = ({ menuSelect }) => {
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={menuSelect}
    />
  )
}

export default DropdownSelect
