import {
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import Colors from './Colors';

export const MyLightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    subtext: Colors.subtext1,
  },
}

export const MyDarkTheme = {
  ...DarkTheme,
  dark: false,
  colors: {
    ...DarkTheme.colors,
    subtext: Colors.subtext2,
  },
}