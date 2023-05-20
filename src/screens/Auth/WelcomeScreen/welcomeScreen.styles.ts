import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_REGULAR } from 'constants/fonts/fonts';
import { SIZES, responsiveHeight } from 'constants/sizes/sizes';

const IMAGE_SCALE_PERCENTAGE = 30;

export const styles = StyleSheet.create({
  button: {
    bottom: 40,
    left: SIZES.S,
    position: 'absolute',
    right: SIZES.S,
  },
  logo: {
    alignSelf: 'center',
    height: responsiveHeight(IMAGE_SCALE_PERCENTAGE),
    marginBottom: SIZES.XL,
    width: responsiveHeight(IMAGE_SCALE_PERCENTAGE),
  },
  screen: {
    flex: 1,
  },
  screenContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: SIZES.M,
  },
  title: {
    color: COLORS.lightGreen,
    fontSize: 20,
    ...SPACE_MONO_REGULAR,
  },
});
