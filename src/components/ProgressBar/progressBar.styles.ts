import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';

const BORDER_RADIUS = 20;

export const styles = StyleSheet.create({
  progressBar: {
    backgroundColor: COLORS.lightGreen,
    borderRadius: BORDER_RADIUS,
    height: '100%',
  },
  progressBarContainer: {
    backgroundColor: COLORS.darkGrey,
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    width: '100%',
  },
});
