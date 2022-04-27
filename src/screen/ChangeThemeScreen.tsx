import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { styles } from '../theme/appTheme'

export const ChangeThemeScreen = () => {

  const { setDarkTheme, setLightTheme, theme: {colors} } = useContext(ThemeContext)

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <TouchableOpacity 
          onPress={setLightTheme}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20
          }}
          activeOpacity={ 0.7 }
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20
          }}>
            Light 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={setDarkTheme}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20
          }}
          activeOpacity={ 0.7 }
        >
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20
          }}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
