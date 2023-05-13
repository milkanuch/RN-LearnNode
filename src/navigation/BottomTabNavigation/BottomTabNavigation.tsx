import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { DrawerNavigation } from 'navigation/DrawerNavigation/DrawerNavigation';
import { ProfileStackNavigation } from 'navigation/ProfileStackNavigation/ProfileStackNavigation';

import {
  DRAWER_NAVIGATION_OPTIONS,
  PROFILE_STACK_OPTIONS,
} from './bottomTabNavigation.settings';
import {
  BottomTabNavigationTypes,
  BottomTabParamList,
} from './bottomTabNavigation.types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        component={DrawerNavigation}
        name={BottomTabNavigationTypes.DrawerNavigation}
        options={DRAWER_NAVIGATION_OPTIONS}
      />
      <BottomTab.Screen
        component={ProfileStackNavigation}
        name={BottomTabNavigationTypes.ProfileStack}
        options={PROFILE_STACK_OPTIONS}
      />
    </BottomTab.Navigator>
  );
};
