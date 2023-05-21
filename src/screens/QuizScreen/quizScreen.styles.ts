import { StyleSheet } from 'react-native';

import { initialWindowMetrics } from 'react-native-safe-area-context';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_REGULAR } from 'constants/fonts/fonts';
import {
  responsiveHeight,
  responsiveWidth,
  SIZES,
} from 'constants/sizes/sizes';

const PROGRESS_BAR_HEIGHT = 2;
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
  continueButton: {
    marginTop: SIZES.XS,
  },
  disabledButton: {
    backgroundColor: COLORS.red,
  },
  progressBarContainer: {
    backgroundColor: COLORS.lightGrey,
    height: responsiveHeight(PROGRESS_BAR_HEIGHT),
    marginVertical: SIZES.XXXXL,
    width: '80%',
  },
  progressContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  progressDescription: {
    alignSelf: 'center',
    color: COLORS.white,
    fontSize: SIZES.XXL,
    ...SPACE_MONO_REGULAR,
  },
  questionTitle: {
    color: COLORS.white,
    fontSize: SIZES.XXL,
    marginVertical: SIZES.XXXL,
    textAlign: 'center',
    ...SPACE_MONO_REGULAR,
  },
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.M,
  },
});
