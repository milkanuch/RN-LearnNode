import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_BOLD } from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes/sizes';

export const styles = StyleSheet.create({
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
  title: {
    color: COLORS.lightGreen,
    fontSize: SIZES.XXL,
    marginTop: SIZES.M,
    ...SPACE_MONO_BOLD,
  },
});
