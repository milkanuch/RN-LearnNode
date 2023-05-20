import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SPACE_MONO_REGULAR } from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes/sizes';

const BORDER_RADIUS = 10;

export const styles = StyleSheet.create({
  addSectionButton: {
    marginVertical: 15,
  },
  container: {
    flex: 1,
    paddingHorizontal: SIZES.M,
  },
  descriptionContainer: {
    height: '50%',
    justifyContent: 'space-around',
  },
  descriptionInput: {
    backgroundColor: COLORS.darkGrey,
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    color: COLORS.white,
    height: '95%',
    padding: SIZES.S,
    paddingLeft: SIZES.L,
    textAlignVertical: 'top',
  },
  errorMessage: {
    color: COLORS.white,
    fontSize: SIZES.L,
  },

  modalBackground: {
    backgroundColor: COLORS.lightGrey,
  },
  nameInput: {
    backgroundColor: COLORS.darkGrey,
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    color: COLORS.white,
    padding: SIZES.S,
    paddingLeft: SIZES.L,
  },
  title: {
    alignSelf: 'center',
    fontSize: 18,
    ...SPACE_MONO_REGULAR,
  },
});
