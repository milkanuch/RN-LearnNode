import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { COLORS } from 'constants/colors/colors';

export const PROFILE_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitle: 'Your Profile',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: COLORS.lightGreen,
  },
};
