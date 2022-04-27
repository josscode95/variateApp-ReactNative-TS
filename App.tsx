import 'react-native-gesture-handler';
import React from 'react';
import { Navigator } from './src/navigation/Navigator';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme:Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors
//     // primary: 'string',
//     // background: 'string',
//     // card: 'string',
//     // text: 'string',
//     // border: 'string',
//     // notification: 'string',
//   }
// }

const App = () => {
  return (
    <AppState>
      <StatusBar 
        backgroundColor='black'
      />
      <Navigator />
    </AppState>
  )
}


const AppState = ({children}:any) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}

export default App;