import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';
import { SIZES, responsiveHeight } from 'constants/sizes/sizes';

const SCREEN_HEIGHT = 90;

export const styles = StyleSheet.create({
  addQuizButton: {
    backgroundColor: COLORS.green,
    color: COLORS.white,
    marginTop: SIZES.M,
  },
  answersList: {
    flexGrow: 0,
    marginBottom: SIZES.M,
  },
  container: {
    flex: 1,
    paddingHorizontal: SIZES.M,
  },
  inputContainer: {
    marginTop: SIZES.M,
  },
  modalBackground: {
    backgroundColor: COLORS.lightGrey,
  },
  question: {
    backgroundColor: COLORS.darkGrey,
    borderRadius: 10,
    borderWidth: 1,
    color: COLORS.white,
    padding: SIZES.S,
    paddingLeft: SIZES.L,
  },
  screen: {
    height: responsiveHeight(SCREEN_HEIGHT),
  },
});
