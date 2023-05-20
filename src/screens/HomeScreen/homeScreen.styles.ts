import { StyleSheet } from 'react-native';

import { SIZES } from 'constants/sizes/sizes';

export const styles = StyleSheet.create({
  addButton: {
    bottom: SIZES.M,
    paddingHorizontal: SIZES.M,
    paddingVertical: SIZES.S,
    position: 'absolute',
    right: SIZES.M,
  },
  screen: {
    flex: 1,
    paddingHorizontal: SIZES.M,
  },
});
