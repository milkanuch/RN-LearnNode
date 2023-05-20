import * as yup from 'yup';

const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 20;

export const signInScheme = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is a required field'),
  password: yup
    .string()
    .matches(
      /^[a-zA-Z0-9]{3,30}$/,
      'Password can only contain Latin letters or numbers',
    )
    .lowercase()
    .min(
      MIN_PASSWORD_LENGTH,
      `Password can't be shorter than ${MIN_PASSWORD_LENGTH} characters`,
    )
    .max(
      MAX_PASSWORD_LENGTH,
      `Password can't be longer than ${MAX_PASSWORD_LENGTH} characters`,
    )
    .required('Password is a required field.'),
});
