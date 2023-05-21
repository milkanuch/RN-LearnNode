import * as yup from 'yup';

export const profileScheme = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  nickname: yup.string().required('Nickname is required'),
});
