import React from 'react'
import { Alert, Button, View } from 'react-native'

import prompt from 'react-native-prompt-android'

import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const AlertScreen = () => {

  const showAlert = () => {
    Alert.alert(
      "Titulo",
      "Mensaje de la Alerta",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive'
        },
        {
          text: "OK",
          onPress:() => console.log('Ok Pressed')
        }
      ]
    )
  }

  const showPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim you $1.5B in lottery winnings',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel pressed'), style: 'cancel' },
        { text: 'OK', onPress: password => console.log('OK pressed, password: ', password) }
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'Test',
        placeholder: 'Hola mundo'
      }
    )
  }

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alerts' />
      <Button 
        title="Mostrar Alerta"
        onPress={showAlert}
      />
      <View style={{height: 10}}/>
      <Button 
        title="Mostrar Prompt"
        onPress={showPrompt}
      />
    </View>
  )
}
