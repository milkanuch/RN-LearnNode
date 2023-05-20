import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';

import { SideBar } from 'components/SideBar/SideBar';

import { HomeStackNavigation } from 'navigation/HomeStackNavigation/HomeStackNavigation';

import { HOME_STACK_OPTIONS } from './drawerNavigation.settings';
import { DrawerNavigationTypes } from './drawerNavigation.types';

const Drawer = createDrawerNavigator();

const renderDrawerContent = (props: DrawerContentComponentProps) => {
  return <SideBar {...props} />;
};

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={renderDrawerContent}>
      <Drawer.Screen
        component={HomeStackNavigation}
        name={DrawerNavigationTypes.HomeStack}
        options={HOME_STACK_OPTIONS}
      />
    </Drawer.Navigator>
  );
};
