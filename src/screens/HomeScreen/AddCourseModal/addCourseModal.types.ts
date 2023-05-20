import { KeyboardType } from 'react-native';

export interface AddCourseModalProps {
  onClose: () => void;
}

export interface AddCourseForm {
  name: string;
  description: string;
}

export interface AddCourseInputsSettings {
  name: 'name' | 'description';
  label: string;
  maxLength?: number;
  placeholder: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: KeyboardType;
  multiline?: boolean;
}
