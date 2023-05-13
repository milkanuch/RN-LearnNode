import { DrawerNavigationOptions } from '@react-navigation/drawer';

export const HOME_STACK_OPTIONS: DrawerNavigationOptions = {
  headerShown: true,
  headerTitle: 'Home',
  drawerLabel: 'Home',
};

export const PROFILE_STACK_OPTIONS: DrawerNavigationOptions = {
  headerShown: false,
  drawerLabel: 'Profile',
};
