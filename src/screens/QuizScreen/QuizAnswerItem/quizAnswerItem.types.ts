export interface QuizAnswerItemProps {
  answer: string;
  activeAnswer: string | null;
  onPress: (answer: string) => void;
}
