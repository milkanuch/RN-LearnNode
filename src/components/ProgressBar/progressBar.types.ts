import { ViewStyle } from 'react-native';

export interface ProgressBarProps {
  currentProgress: number;
  progressEndpoint: number;
  progressBarStyle?: ViewStyle;
  progressBarContainerStyle?: ViewStyle;
}
