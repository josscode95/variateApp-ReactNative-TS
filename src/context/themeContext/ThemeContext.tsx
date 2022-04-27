import React, { createContext, useEffect, useReducer } from "react";
import { Appearance, AppState, useColorScheme } from "react-native";
import { darkTheme, lightTheme, themeReducer, ThemeState } from "./themeReducer";

interface IThemeProvider{
  children:JSX.Element|JSX.Element[]
}

interface IThemeContext{
  theme:ThemeState;
  setDarkTheme:()=>void;
  setLightTheme:()=>void;
}

export const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider = ({children}:IThemeProvider) => {

  // const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark') ? darkTheme : lightTheme)

  //Solo IOS
  // useEffect(() => {
  //   colorScheme === 'light'
  //     ? setLightTheme()
  //     : setDarkTheme()
  // }, [colorScheme])

  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      if( status === 'active' ){
        ( Appearance.getColorScheme() === 'light' )
          ? setLightTheme()
          : setDarkTheme()
      }
    })
  }, [])
  
  

  const setDarkTheme = () => {
    dispatch({type:'set_dark_theme'})
    console.log('Set Dark theme');
  }

  const setLightTheme = () => {
    dispatch({type:'set_light_theme'})
    console.log('Set Light theme');
  }

  return(
    <ThemeContext.Provider value={{
      setDarkTheme,
      setLightTheme,
      theme
    }}>
      { children }
    </ThemeContext.Provider>
  )
}