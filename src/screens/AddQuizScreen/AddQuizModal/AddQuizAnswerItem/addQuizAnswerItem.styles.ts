import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SIZES, responsiveHeight } from 'constants/sizes/sizes';

const ITEM_HEIGHT = 5;

export const styles = StyleSheet.create({
  activeAnswerContainer: {
    backgroundColor: COLORS.lightGreen,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.XXS,
    borderWidth: 1,
    flexDirection: 'row',
    height: responsiveHeight(ITEM_HEIGHT),
    justifyContent: 'space-between',
    marginVertical: SIZES.XS,
    paddingHorizontal: SIZES.S,
  },
  iconButton: {
    backgroundColor: COLORS.transparent,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
