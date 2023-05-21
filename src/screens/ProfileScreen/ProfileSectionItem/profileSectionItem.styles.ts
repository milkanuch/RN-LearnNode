import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_REGULAR } from 'constants/fonts/fonts';
import { responsiveHeight, SIZES } from 'constants/sizes/sizes';

const CONTAINER_HEIGHT = 5;

export const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(CONTAINER_HEIGHT),
    marginVertical: SIZES.L,
  },
  progressBar: {
    backgroundColor: COLORS.green,
    height: '100%',
  },
  progressBarContainer: {
    backgroundColor: COLORS.lightGrey,
    height: '40%',
  },
  progressContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  progressDescription: {
    alignSelf: 'center',
    color: COLORS.white,
    fontSize: SIZES.XL,
    marginBottom: SIZES.XS,
    ...SPACE_MONO_REGULAR,
  },
});
