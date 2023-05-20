import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_REGULAR } from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes/sizes';

export const ICONS = {
  home: 'home',
  profile: 'account',
};

export const ICONS_SIZE = 24;

export const DRAWER_NAVIGATION_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: 'Home',
  tabBarLabelStyle: {
    ...SPACE_MONO_REGULAR,
    fontSize: SIZES.L,
  },
  tabBarIcon: focused => (
    <Icon
      color={focused ? COLORS.purple : COLORS.white}
      name={ICONS.home}
      size={ICONS_SIZE}
    />
  ),
};

export const PROFILE_STACK_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: 'Profile',
  tabBarLabelStyle: {
    ...SPACE_MONO_REGULAR,
    fontSize: SIZES.L,
  },
  tabBarIcon: focused => (
    <Icon
      color={focused ? COLORS.purple : COLORS.white}
      name={ICONS.profile}
      size={ICONS_SIZE}
    />
  ),
};
