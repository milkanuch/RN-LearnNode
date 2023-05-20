import { AddCourseInputsSettings } from './addCourseModal.types';

export const SNAP_POINTS = ['75', '100%'];

export const ADD_COURSE_MODAL_TITLE = 'Add your own section';

export const DEFAULT_VALUE = '';
export const FORM_MODE = 'onChange';

export const ADD_BUTTON_TITLE = 'ADD SECTION';

export const NAME_INPUT_SETTINGS: AddCourseInputsSettings = {
  name: 'name',
  label: 'Name',
  placeholder: 'Enter name',
  autoCapitalize: 'sentences',
};

export const DESCRIPTION_INPUT_SETTINGS: AddCourseInputsSettings = {
  name: 'description',
  label: 'Description',
  placeholder: 'Enter description',
  autoCapitalize: 'sentences',
  multiline: true,
};
