import { KeyboardType } from 'react-native';

export interface SignUpForm {
  email: string;
  nickname: string;
  password: string;
  confirmPassword?: string;
}

export interface SignUpInputsSettings {
  name: 'email' | 'nickname' | 'password' | 'confirmPassword';
  label: string;
  maxLength?: number;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
}
