import { DrawerNavigationOptions } from '@react-navigation/drawer';

import { COLORS } from 'constants/colors/colors';

export const HOME_STACK_OPTIONS: DrawerNavigationOptions = {
  headerShown: true,
  headerTitle: 'Learn Node.js',
  drawerLabel: 'Home',
  headerTintColor: COLORS.lightGreen,
};
