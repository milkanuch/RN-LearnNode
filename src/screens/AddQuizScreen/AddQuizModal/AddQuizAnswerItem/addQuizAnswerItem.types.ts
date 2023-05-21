export interface AddQuizAnswerItemProps {
  answer: string;
  correctAnswer: string;
  onSelect: (answer: string) => void;
  onDelete: (answer: string) => void;
}
