import { KeyboardType } from 'react-native';

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignInInputsSettings {
  name: 'email' | 'password';
  label: string;
  maxLength?: number;
  placeholder: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
}
