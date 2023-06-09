import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SignInScreen } from 'screens/Auth/SignInScreen/SignInScreen';
import { SignUpScreen } from 'screens/Auth/SignUpScreen/SignUpScreen';
import { WelcomeScreen } from 'screens/Auth/WelcomeScreen/WelcomeScreen';

import {
  EDGES,
  SIGN_IN_SCREEN_OPTIONS,
  SIGN_UP_SCREEN_OPTIONS,
  WELCOME_SCREEN_OPTIONS,
} from './authStackNavigation.settings';
import { styles } from './authStackNavigation.styles';
import {
  AuthStackNavigationTypes,
  AuthStackParamList,
} from './authStackNavigation.types';

const NativeStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigation = () => {
  return (
    <SafeAreaView edges={EDGES} style={styles.screen}>
      <NativeStack.Navigator>
        <NativeStack.Screen
          component={WelcomeScreen}
          name={AuthStackNavigationTypes.WelcomeScreen}
          options={WELCOME_SCREEN_OPTIONS}
        />
        <NativeStack.Screen
          component={SignInScreen}
          name={AuthStackNavigationTypes.SignInScreen}
          options={SIGN_IN_SCREEN_OPTIONS}
        />
        <NativeStack.Screen
          component={SignUpScreen}
          name={AuthStackNavigationTypes.SignUpScreen}
          options={SIGN_UP_SCREEN_OPTIONS}
        />
      </NativeStack.Navigator>
    </SafeAreaView>
  );
};
