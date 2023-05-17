import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_REGULAR } from 'constants/fonts/fonts';
import { SIZES, responsiveHeight } from 'constants/sizes/sizes';

const IMAGE_SCALE_PERCENTAGE = 30;

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.purple,
    borderRadius: 4,
    bottom: SIZES.XXXL,
    flexDirection: 'row',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
  },
  logo: {
    alignSelf: 'center',
    height: responsiveHeight(IMAGE_SCALE_PERCENTAGE),
    marginVertical: SIZES.S,
    width: responsiveHeight(IMAGE_SCALE_PERCENTAGE),
  },
  screen: {
    flex: 1,
  },
  screenContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: SIZES.M,
  },
  title: {
    color: COLORS.purple,
    fontSize: 20,
    ...SPACE_MONO_REGULAR,
  },
});
