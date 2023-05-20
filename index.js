/**
 * @format
 */

import { AppRegistry } from 'react-native';

import 'react-native-gesture-handler';
import ErrorBoundary from 'react-native-error-boundary';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { FallBack } from 'components/FallBack/FallBack';

import { persistor, store } from 'store/index';

import { App } from './App';
import { name as appName } from './app.json';

const Root = () => (
  <ErrorBoundary FallbackComponent={FallBack}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ErrorBoundary>
);

AppRegistry.registerComponent(appName, () => Root);
