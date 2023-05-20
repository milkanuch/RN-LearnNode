import { DefaultTheme, Theme } from '@react-navigation/native';

import { COLORS } from 'constants/colors/colors';

export const APP_THEME: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.darkGrey,
    primary: COLORS.purple,
    text: COLORS.white,
    card: COLORS.grey,
  },
};
