import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_REGULAR } from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes/sizes';

export const styles = StyleSheet.create({
  completeQuizzes: {
    backgroundColor: COLORS.green,
    color: COLORS.white,
    fontSize: SIZES.M,
    marginBottom: 50,
    marginTop: SIZES.S,
    paddingHorizontal: SIZES.M,
    textAlign: 'center',
    ...SPACE_MONO_REGULAR,
  },
  questionTitle: {
    borderColor: COLORS.white,
    borderRadius: SIZES.XXS,
    borderWidth: 1,
    color: COLORS.white,
    fontSize: SIZES.XL,
    marginVertical: SIZES.XS,
    padding: SIZES.XL,
    ...SPACE_MONO_REGULAR,
  },
  screen: {
    flex: 1,
    paddingHorizontal: SIZES.M,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.XXXXL,
    marginVertical: SIZES.S,
    paddingHorizontal: SIZES.M,
    textAlign: 'center',
    ...SPACE_MONO_REGULAR,
  },
});
