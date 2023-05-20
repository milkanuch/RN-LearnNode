import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_BOLD_ITALIC } from 'constants/fonts/fonts';
import { SIZES, responsiveHeight } from 'constants/sizes/sizes';

const CONTAINER_HEIGHT = 80;

export const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    height: responsiveHeight(CONTAINER_HEIGHT),
    justifyContent: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.XL,
    marginVertical: SIZES.M,
    ...SPACE_MONO_BOLD_ITALIC,
  },
});
