import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import { useAppSelector } from 'store/index';
import { selectIsUserLogged } from 'store/userSlice/userSlice';

import { AppStackNavigation } from 'navigation/AppStackNavigation/AppStackNavigation';
import { AuthStackNavigation } from 'navigation/AuthStackNavigation/AuthStackNavigation';

import { APP_THEME } from './appNavigation.settings';

export const AppNavigation = () => {
  const isUserAuthenticated = useAppSelector(selectIsUserLogged);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer theme={APP_THEME}>
        {isUserAuthenticated ? <AppStackNavigation /> : <AuthStackNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
