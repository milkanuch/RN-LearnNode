import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeStackNavigation } from 'navigation/HomeStackNavigation/HomeStackNavigation';

import { HOME_STACK_OPTIONS } from './drawerNavigation.settings';
import { DrawerNavigationTypes } from './drawerNavigation.types';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        component={HomeStackNavigation}
        name={DrawerNavigationTypes.HomeStack}
        options={HOME_STACK_OPTIONS}
      />
    </Drawer.Navigator>
  );
};
