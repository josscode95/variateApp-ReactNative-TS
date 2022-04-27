import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'

export const TextInputScreen = () => {

  const { theme:{colors, dividerColor} } = useContext(ThemeContext)

  const { form, isSuscribed, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false
  });

  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
    >
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Text Inputs" />
          <TextInput 
            style={{
              ...stylesInput.inputStyle,
              borderColor: colors.text,
              color: colors.text
            }}
            placeholder='Ingrese su nombre'
            autoCorrect={false}
            autoCapitalize='words'
            onChangeText={(value) => onChange(value, 'name')}
            placeholderTextColor={dividerColor}
          />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <TextInput 
            style={{
              ...stylesInput.inputStyle,
              borderColor: colors.text,
              color: colors.text
            }}
            placeholder='Ingrese su email'
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(value) => onChange(value, 'email')}
            keyboardType="email-address"
            placeholderTextColor={dividerColor}
          />
          <View style={stylesInput.sRow}>
            <Text style={stylesInput.sText}>Suscribirme</Text>
            <CustomSwitch isOn={isSuscribed} onChange={(value) => onChange(value, 'isSuscribed')}/>
          </View>
          <TextInput 
            style={{
              ...stylesInput.inputStyle,
              borderColor: colors.text,
              color: colors.text
            }}
            placeholder='Ingrese su telefono'
            onChangeText={(value) => onChange(value, 'phone')}
            keyboardType="phone-pad"
            placeholderTextColor={dividerColor}
          />
          <View style={{height: 50}}/>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const stylesInput = StyleSheet.create({
  inputStyle:{
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 7
  },
  sRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8
  },
  sText:{
    fontSize: 20
  }
});