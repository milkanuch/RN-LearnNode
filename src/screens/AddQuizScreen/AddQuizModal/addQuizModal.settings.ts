import { QuizInputsSettings } from './addQuizModal.types';

export const SNAP_POINTS = ['75%', '100%'];
export const FORM_MODE = 'onChange';

export const QUESTION_INPUT_SETTINGS: QuizInputsSettings = {
  name: 'question',
  label: 'Question',
  placeholder: 'Enter your question',
  autoCapitalize: 'sentences',
};

export const ANSWER_INPUT_SETTINGS: QuizInputsSettings = {
  name: 'answer',
  label: 'Answer',
  placeholder: 'Enter your answer',
  autoCapitalize: 'sentences',
};

export const ADD_QUIZ_BUTTON_TITLE = 'Add Quiz';
