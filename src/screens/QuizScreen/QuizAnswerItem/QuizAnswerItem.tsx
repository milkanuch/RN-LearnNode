import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './quizAnswerItem.styles';

export const QuizAnswerItem = () => {
  return (
    <TouchableOpacity style={styles.answerContainer}>
      <Text>QuizAnswerItem</Text>
    </TouchableOpacity>
  );
};
