import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_REGULAR } from 'constants/fonts/fonts';
import { responsiveHeight, SIZES } from 'constants/sizes/sizes';

const PROGRESS_BAR_HEIGHT = 2;

const CONTINUE_BUTTON_HEIGHT = 7;

export const styles = StyleSheet.create({
  answersList: {
    flexGrow: 0,
  },
  continueButton: {
    marginBottom: responsiveHeight(CONTINUE_BUTTON_HEIGHT),
    marginTop: SIZES.XS,
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
