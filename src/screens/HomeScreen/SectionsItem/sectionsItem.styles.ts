import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_REGULAR } from 'constants/fonts/fonts';
import {
  SIZES,
  responsiveHeight,
  responsiveWidth,
} from 'constants/sizes/sizes';

const CONTAINER_WIDTH = 97;
const CONTAINER_HEIGHT = 13;

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderWidth: 1,
  },
  container: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: SIZES.S,
    flexDirection: 'row',
    height: responsiveHeight(CONTAINER_HEIGHT),
    justifyContent: 'space-between',
    marginVertical: SIZES.M,
    width: responsiveWidth(CONTAINER_WIDTH),
  },
  description: {
    color: COLORS.white,
    fontSize: SIZES.M,
    marginVertical: SIZES.XXS,
    ...SPACE_MONO_REGULAR,
  },
  descriptionContainer: {
    alignItems: 'center',
    flex: 2,
    paddingHorizontal: SIZES.M,
    paddingVertical: SIZES.XS,
  },
  name: {
    color: COLORS.darkPurple,
    fontSize: SIZES.XXL,
    ...SPACE_MONO_REGULAR,
  },
});
