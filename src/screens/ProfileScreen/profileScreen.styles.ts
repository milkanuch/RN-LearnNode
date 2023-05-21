import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SIZES } from 'constants/sizes/sizes';

export const styles = StyleSheet.create({
  input: {
    color: COLORS.white,
    marginVertical: SIZES.M,
    paddingLeft: SIZES.S,
  },
  saveButton: {
    marginVertical: SIZES.L,
  },
  screen: {
    flex: 1,
    paddingHorizontal: SIZES.M,
  },
});
