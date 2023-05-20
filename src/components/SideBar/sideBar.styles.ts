import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_REGULAR } from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes/sizes';

export const styles = StyleSheet.create({
  button: {
    marginVertical: SIZES.M,
  },
  screen: {
    flex: 1,
  },
  screenContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: SIZES.M,
  },
  title: {
    color: COLORS.lightGreen,
    fontSize: 20,
    paddingVertical: SIZES.M,
    ...SPACE_MONO_REGULAR,
  },
});
