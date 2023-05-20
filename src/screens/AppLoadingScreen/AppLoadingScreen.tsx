import { ActivityIndicator } from 'react-native';

import {
  ACTIVITY_INDICATOR_COLOR,
  ACTIVITY_INDICATOR_SIZE,
} from './appLoadingScreen.settings';
import { styles } from './appLoadingScreen.styles';

export const AppLoadingScreen = () => (
  <ActivityIndicator
    color={ACTIVITY_INDICATOR_COLOR}
    size={ACTIVITY_INDICATOR_SIZE}
    style={styles.screenContainer}
  />
);
