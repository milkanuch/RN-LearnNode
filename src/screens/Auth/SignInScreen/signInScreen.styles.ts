import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import {
  SPACE_MONO_BOLD,
  SPACE_MONO_BOLD_ITALIC,
  SPACE_MONO_REGULAR,
} from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes/sizes';

const BUTTON_BORDER_RADIUS = 10;

export const styles = StyleSheet.create({
  continueButton: {
    borderRadius: BUTTON_BORDER_RADIUS,
    marginVertical: SIZES.M,
  },
  error: {
    color: COLORS.red,
    fontSize: SIZES.M,
    marginVertical: SIZES.M,
    ...SPACE_MONO_BOLD_ITALIC,
  },
  input: {
    color: COLORS.white,
    fontSize: SIZES.L,
    padding: SIZES.S,
    paddingLeft: SIZES.L,
    ...SPACE_MONO_REGULAR,
  },
  screen: {
    flex: 1,
  },
  screenContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: SIZES.M,
  },
  signUpButton: {
    backgroundColor: COLORS.transparent,
    borderColor: COLORS.white,
    borderRadius: BUTTON_BORDER_RADIUS,
    borderWidth: 1,
  },
  signUpButtonText: {
    color: COLORS.white,
    fontSize: SIZES.M,
    ...SPACE_MONO_BOLD,
  },
});
