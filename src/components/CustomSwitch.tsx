import React, { useContext, useState } from 'react'
import { Platform, Switch } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface ICustomSwitch{
  isOn:boolean;
  onChange:(value:boolean)=>void;
}

export const CustomSwitch = ({isOn, onChange}:ICustomSwitch) => {

  const { theme:{colors} } = useContext(ThemeContext)

  const [isEnabled, setIsEnabled] = useState(isOn)
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled)
  }

  return (
    <Switch
      trackColor={{ false: colors.primary, true: colors.card }}
      thumbColor={(Platform.OS === 'android') ? colors.card : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}
