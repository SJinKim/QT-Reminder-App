import React, { useState } from 'react'
import RNPickerSelect from 'react-native-picker-select'

const DropdownSelect = ({ menuSelect, isChurch, setChurch, setCell }) => {
  return (
    <RNPickerSelect
      onValueChange={(value) => (isChurch ? setChurch(value) : setCell(value))}
      items={menuSelect}
    />
  )
}

export default DropdownSelect
