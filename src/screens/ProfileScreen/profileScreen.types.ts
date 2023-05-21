export interface ProfileForm {
  email: string;
  nickname: string;
}

export interface ProfileInputsSettings {
  name: 'email' | 'nickname';
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
}
