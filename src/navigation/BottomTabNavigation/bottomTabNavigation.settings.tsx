import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ICONS = {
  home: 'home',
  profile: 'account',
};

export const ICONS_SIZE = 24;

export const DRAWER_NAVIGATION_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: 'Home',
  tabBarIcon: () => <Icon name={ICONS.profile} size={ICONS_SIZE} />,
};

export const PROFILE_STACK_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: 'Profile',
  tabBarIcon: () => <Icon name={ICONS.home} size={ICONS_SIZE} />,
};
