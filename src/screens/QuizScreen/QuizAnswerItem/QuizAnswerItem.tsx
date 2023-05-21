import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { IconSize } from 'components/CustomButton/customButton.types';

import { COLORS } from 'constants/colors/colors';

import { ICON_NAME } from './quizAnswerItem.settings';
import { styles } from './quizAnswerItem.styles';
import { QuizAnswerItemProps } from './quizAnswerItem.types';

export const QuizAnswerItem: FC<QuizAnswerItemProps> = ({
  answer,
  onPress,
  activeAnswer,
}) => {
  const handleAnswerPress = () => onPress(answer);
  const isActive = activeAnswer === answer;

  return (
    <TouchableOpacity
      onPress={handleAnswerPress}
      style={[
        styles.answerContainer,
        isActive && styles.activeAnswerContainer,
      ]}>
      {!!isActive && (
        <View style={styles.icon}>
          <Icon color={COLORS.green} name={ICON_NAME} size={IconSize.Large} />
        </View>
      )}
      <Text style={[styles.title, isActive && styles.activeTitle]}>
        {answer}
      </Text>
    </TouchableOpacity>
  );
};
