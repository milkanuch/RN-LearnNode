import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_BOLD } from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes/sizes';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: 24,
    marginBottom: SIZES.XS,
    ...SPACE_MONO_BOLD,
  },
});
