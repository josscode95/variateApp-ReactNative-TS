import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { IMenuItem } from '../interfaces/interfaces';

Icon

interface IFlatListMenuItem{
  item:IMenuItem;
}

export const FlatListMenuItem = ({item}:IFlatListMenuItem) => {

  const navigation = useNavigation();
  const { theme: {colors} } = useContext(ThemeContext)

  return(
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(item.component as never)}
    >
      <View style={styles.container}>
        <Icon 
          name={item.icon}
          color={colors.primary}
          size={23}
        />
        <Text 
          style={{
            ...styles.itemText,
            color: colors.text
          }}
        >{ item.name }</Text>
        <Icon 
          name="chevron-forward-outline"
          color={colors.primary}
          size={23}
          style={styles.arrow}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  itemText:{
    marginLeft: 10,
    fontSize: 19
  },
  arrow:{
    position: 'absolute',
    right: 0
  }
});