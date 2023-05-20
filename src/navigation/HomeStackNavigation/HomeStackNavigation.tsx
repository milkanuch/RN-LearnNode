import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from 'screens/HomeScreen/HomeScreen';

import { HOME_SCREEN_OPTIONS } from './homeStackNavigation.settings';
import {
  HomeStackNavigationTypes,
  HomeStackParamList,
} from './homeStackNavigation.types';

const NativeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStackNavigation = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        component={HomeScreen}
        name={HomeStackNavigationTypes.HomeScreen}
        options={HOME_SCREEN_OPTIONS}
      />
    </NativeStack.Navigator>
  );
};
