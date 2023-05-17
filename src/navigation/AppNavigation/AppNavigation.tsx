import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import { AppStackNavigation } from 'navigation/AppStackNavigation/AppStackNavigation';
import { AuthStackNavigation } from 'navigation/AuthStackNavigation/AuthStackNavigation';

import { APP_THEME, EDGES } from './appNavigation.settings';
import { styles } from './appNavigation.styles';

export const AppNavigation = () => {
  const isUserAuthenticated = false;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView edges={EDGES} style={styles.screen}>
        <NavigationContainer theme={APP_THEME}>
          {isUserAuthenticated ? (
            <AppStackNavigation />
          ) : (
            <AuthStackNavigation />
          )}
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
