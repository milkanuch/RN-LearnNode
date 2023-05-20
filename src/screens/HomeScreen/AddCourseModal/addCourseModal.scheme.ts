import * as yup from 'yup';

const DESCRIPTION_MIN_LENGTH = 30;

export const addCourseScheme = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup
    .string()
    .min(
      DESCRIPTION_MIN_LENGTH,
      `Description must be at least ${DESCRIPTION_MIN_LENGTH} characters`,
    )
    .required('Description is required'),
});
