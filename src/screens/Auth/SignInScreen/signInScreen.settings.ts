import { ValidationMode } from 'react-hook-form';

import { SignInInputsSettings } from './signInScreen.types';

export const DEFAULT_VALUE = '';
export const FORM_MODE: keyof ValidationMode = 'onChange';

export const EMAIL_INPUT_SETTINGS: SignInInputsSettings = {
  name: 'email',
  label: 'E-mail',
  maxLength: 25,
  placeholder: 'john.doe@example.com',
};
export const PASSWORD_SETTINGS: SignInInputsSettings = {
  name: 'password',
  label: 'Password',
  placeholder: '********',
  secureTextEntry: true,
};

export const TITLE = 'SIGN-IN';
export const CONTINUE_TITLE = 'Continue';
export const SIGN_UP_TITLE = "Don't have an account? Sign up";
