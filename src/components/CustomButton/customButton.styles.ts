import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_REGULAR } from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes/sizes';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.purple,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    paddingHorizontal: SIZES.XXXS,
  },
  large: {
    padding: SIZES.L,
  },
  small: {
    padding: SIZES.S,
  },
  text: {
    color: COLORS.grey,
    fontSize: SIZES.XL,
    ...SPACE_MONO_REGULAR,
  },
});
