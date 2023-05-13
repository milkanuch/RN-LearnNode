import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProfileScreen } from 'screens/ProfileScreen/ProfileScreen';

import { PROFILE_SCREEN_OPTIONS } from './profileStackNavigation.settings';
import {
  ProfileStackNavigationTypes,
  ProfileStackParamList,
} from './profileStackNavigation.types';

const NativeStack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileStackNavigation = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        component={ProfileScreen}
        name={ProfileStackNavigationTypes.ProfileScreen}
        options={PROFILE_SCREEN_OPTIONS}
      />
    </NativeStack.Navigator>
  );
};
