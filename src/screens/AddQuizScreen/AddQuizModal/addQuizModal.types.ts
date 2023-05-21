import { TextInputProps } from 'react-native/types';

export interface AddQuizModalProps {
  onClose: () => void;
}

export interface QuizForm {
  question: string;
  answer: string;
}

export interface QuizInputsSettings {
  name: 'question' | 'answer';
  label: string;
  placeholder: string;
  autoCapitalize: TextInputProps['autoCapitalize'];
}
