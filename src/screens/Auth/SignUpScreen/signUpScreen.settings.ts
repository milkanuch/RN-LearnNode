import { ValidationMode } from 'react-hook-form';

import { SignUpInputsSettings } from './signUpScreen.types';

export const DEFAULT_VALUE = '';
export const FORM_MODE: keyof ValidationMode = 'onChange';

export const NICKNAME_INPUT_SETTINGS: SignUpInputsSettings = {
  name: 'nickname',
  label: 'Nickname',
  maxLength: 25,
  placeholder: 'John-Doe',
};

export const EMAIL_INPUT_SETTINGS: SignUpInputsSettings = {
  name: 'email',
  label: 'E-mail',
  maxLength: 25,
  autoCapitalize: 'none',
  placeholder: 'john.doe@example.com',
};

export const PASSWORD_SETTINGS: SignUpInputsSettings = {
  name: 'password',
  label: 'Password',
  autoCapitalize: 'none',
  placeholder: '********',
  secureTextEntry: true,
};

export const CONFIRM_PASSWORD_SETTINGS: SignUpInputsSettings = {
  name: 'confirmPassword',
  label: 'Confirm password',
  autoCapitalize: 'none',
  placeholder: '********',
  secureTextEntry: true,
};

export const TITLE = 'SIGN-UP';
export const SIGN_UP_TITLE = 'Sign up';
