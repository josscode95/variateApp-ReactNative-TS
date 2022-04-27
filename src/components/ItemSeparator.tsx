import React, { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ItemSeparator = () => {

  const { theme  } = useContext(ThemeContext)

  return (
    <View 
      style={{
        borderBottomWidth: 2,
        marginVertical: 10,
        borderBottomColor: theme.dividerColor
      }}
    />
  )
}
