import { FC } from 'react';
import { View, Text } from 'react-native';

import { ProgressBar } from 'components/ProgressBar/ProgressBar';

import { AllQuizResult } from 'services/result/result.types';

import { styles } from './profileSectionItem.styles';

export const ProfileSectionItem: FC<AllQuizResult> = ({
  courseName,
  userScore,
  quizLength,
}) => (
  <View style={styles.container}>
    <Text style={styles.progressDescription}>{courseName}</Text>
    <ProgressBar
      currentProgress={userScore}
      progressBarContainerStyle={styles.progressBarContainer}
      progressBarStyle={styles.progressBar}
      progressEndpoint={quizLength}
    />
  </View>
);
