import { FC } from 'react';
import { View, Text } from 'react-native';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { IconSize } from 'components/CustomButton/customButton.types';

import {
  CHECK_ICON,
  CLOSE_ICON,
  DELETE_ICON,
} from './addQuizAnswerItem.settings';
import { styles } from './addQuizAnswerItem.styles';
import { AddQuizAnswerItemProps } from './addQuizAnswerItem.types';

export const AddQuizAnswerItem: FC<AddQuizAnswerItemProps> = ({
  answer,
  onDelete,
  onSelect,
  correctAnswer,
}) => {
  const isCorrectAnswer = correctAnswer === answer;
  const iconName = isCorrectAnswer ? CLOSE_ICON : CHECK_ICON;

  const handleDelete = () => {
    onDelete(answer);
  };

  const handleSelectAnswer = () => {
    onSelect(answer);
  };

  return (
    <View
      style={[
        styles.container,
        !!isCorrectAnswer && styles.activeAnswerContainer,
      ]}>
      <View style={styles.titleContainer}>
        <CustomButton
          icon={iconName}
          iconSize={IconSize.Large}
          onPress={handleSelectAnswer}
          style={styles.iconButton}
        />
        <Text>{answer}</Text>
      </View>
      <CustomButton
        icon={DELETE_ICON}
        iconSize={IconSize.Large}
        onPress={handleDelete}
        style={styles.iconButton}
      />
    </View>
  );
};
