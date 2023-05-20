import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export type CustomTextInputProps = TextInputProps & {
  label?: string;
  error?: string;
  labelStyle?: TextStyle;
  errorMessageStyle?: TextStyle;
  contentContainerStyle?: ViewStyle;
};
