import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import {
  SPACE_MONO_BOLD_ITALIC,
  SPACE_MONO_REGULAR,
} from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes/sizes';

export const styles = StyleSheet.create({
  error: {
    color: COLORS.red,
    fontSize: SIZES.M,
    ...SPACE_MONO_BOLD_ITALIC,
  },
  input: {
    fontSize: SIZES.L,
    padding: SIZES.S,
    paddingLeft: SIZES.L,
    ...SPACE_MONO_REGULAR,
  },
  inputContainer: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: SIZES.XXXS,
    marginVertical: SIZES.XXS,
  },
  label: {
    color: COLORS.purple,
    fontSize: SIZES.L,
    marginVertical: SIZES.XXXS,
    ...SPACE_MONO_REGULAR,
  },
});
