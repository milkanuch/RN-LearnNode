import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_BOLD_ITALIC } from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes/sizes';

export const styles = StyleSheet.create({
  error: {
    color: COLORS.red,
    fontSize: SIZES.M,
    ...SPACE_MONO_BOLD_ITALIC,
  },
  input: {
    borderColor: COLORS.darkGrey,
    borderWidth: 1,
    padding: SIZES.S,
    paddingLeft: SIZES.L,
  },
  inputContainer: {
    backgroundColor: COLORS.lightGrey,
    marginVertical: SIZES.XXS,
  },
  label: {
    color: COLORS.purple,
    fontSize: SIZES.L,
    marginVertical: SIZES.XXXS,
  },
});
