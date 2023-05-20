import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.darkPurple,
    borderRadius: 50,
    padding: 16,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  container: {
    backgroundColor: COLORS.darkGrey,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: 16,
  },
  error: {
    paddingVertical: 16,
  },
  subtitle: {
    color: COLORS.purple,
    fontSize: 32,
    fontWeight: '800',
  },
  title: {
    color: COLORS.purple,
    fontSize: 48,
    fontWeight: '300',
    paddingBottom: 16,
  },
});
