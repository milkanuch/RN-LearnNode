import { StyleSheet } from 'react-native';

import { initialWindowMetrics } from 'react-native-safe-area-context';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_REGULAR } from 'constants/fonts/fonts';
import { SIZES, responsiveHeight } from 'constants/sizes/sizes';

const PROGRESS_BAR_HEIGHT = 2;
const BUTTON_BOTTOM = initialWindowMetrics?.insets.bottom || 0;

export const styles = StyleSheet.create({
  answerItem: {
    borderColor: COLORS.white,
    borderRadius: SIZES.S,
    borderWidth: 1,
    color: COLORS.white,
    marginVertical: SIZES.M,
    padding: SIZES.M,
    ...SPACE_MONO_REGULAR,
  },
  answersList: {
    flexGrow: 0,
    marginVertical: SIZES.XS,
  },
  completeButton: {
    bottom: BUTTON_BOTTOM + SIZES.XL,
    left: SIZES.M,
    position: 'absolute',
    right: SIZES.M,
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
  screen: {
    flex: 1,
    paddingHorizontal: SIZES.M,
  },
});
