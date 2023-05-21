import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_REGULAR } from 'constants/fonts/fonts';
import { SIZES, responsiveHeight } from 'constants/sizes/sizes';

const ITEM_HEIGHT = 5;

export const styles = StyleSheet.create({
  activeAnswerContainer: {
    backgroundColor: COLORS.green,
  },
  activeTitle: {
    color: COLORS.white,
  },
  answerContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.XXS,
    flexDirection: 'row',
    height: responsiveHeight(ITEM_HEIGHT),
    marginVertical: SIZES.M,
    paddingHorizontal: SIZES.S,
  },
  icon: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
  },
  title: {
    fontSize: SIZES.XL,
    paddingLeft: SIZES.S,
    ...SPACE_MONO_REGULAR,
  },
});
