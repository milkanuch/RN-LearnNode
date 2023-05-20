import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SIZES, responsiveHeight } from 'constants/sizes/sizes';

const ITEM_HEIGHT = 5;

export const styles = StyleSheet.create({
  activeAnswerContainer: {
    backgroundColor: COLORS.lightGreen,
  },
  answerContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: responsiveHeight(ITEM_HEIGHT),
    marginVertical: SIZES.M,
  },
});
