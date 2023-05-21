import { StyleSheet } from 'react-native';

import { initialWindowMetrics } from 'react-native-safe-area-context';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_BOLD } from 'constants/fonts/fonts';
import { SIZES, responsiveWidth } from 'constants/sizes/sizes';

const BUTTON_WIDTH_PERCENTAGE = 45;
const BOTTOM_INSET = initialWindowMetrics?.insets.bottom || 0;

export const styles = StyleSheet.create({
  button: {
    width: responsiveWidth(BUTTON_WIDTH_PERCENTAGE),
  },
  buttonsContainer: {
    bottom: BOTTOM_INSET + SIZES.M,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: SIZES.M,
    marginTop: SIZES.M,
    position: 'absolute',
    right: SIZES.M,
  },
  description: {
    color: COLORS.white,
    fontSize: SIZES.L,
    marginTop: SIZES.S,
  },
  screen: {
    flex: 1,
  },
  screenContainer: {
    flexGrow: 1,
    paddingHorizontal: SIZES.M,
  },
  startButton: {
    width: '100%',
  },
  title: {
    color: COLORS.lightGreen,
    fontSize: SIZES.XXL,
    marginTop: SIZES.M,
    ...SPACE_MONO_BOLD,
  },
});
