import { DefaultTheme, Theme } from '@react-navigation/native';
import { Edge } from 'react-native-safe-area-context';

import { COLORS } from 'constants/colors/colors';

export const EDGES: readonly Edge[] = ['top', 'right', 'left'];

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
