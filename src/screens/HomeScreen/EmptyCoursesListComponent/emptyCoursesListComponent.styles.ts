import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_BOLD_ITALIC } from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes/sizes';

export const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.XL,
    marginVertical: SIZES.M,
    ...SPACE_MONO_BOLD_ITALIC,
  },
});
