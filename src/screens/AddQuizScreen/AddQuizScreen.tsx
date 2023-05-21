import { FC, useState } from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { IconSize } from 'components/CustomButton/customButton.types';

import { selectQuizzes } from 'store/addQuizSlice/addQuizSlice';
import { Quiz } from 'store/addQuizSlice/addQuizSlice.types';
import { useAppSelector } from 'store/index';

import { AddQuizModal } from './AddQuizModal/AddQuizModal';

import {
  ADD_QUESTION_ICON,
  ADD_QUESTION_TITLE,
  ADD_QUIZ_TITLE,
  COMPLETE_ADD_QUIZ_TITLE,
} from './addQuizScreen.settings';
import { styles } from './addQuizScreen.styles';
import { AddQuizScreenProps } from 'navigation/AppStackNavigation/appStackNavigation.types';

const renderItem: ListRenderItem<Quiz> = ({ item }) => (
  <Text style={styles.questionTitle}>{item.question}</Text>
);

const keyExtractor = (item: Quiz, index: number) => item.question + index;

export const AddQuizScreen: FC<AddQuizScreenProps> = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const quizzes = useAppSelector(selectQuizzes);

  const handleAddQuestion = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCompleteAddQuiz = () => {
    //TODO: add logic
  };

  const ListFooterComponent = (
    <CustomButton
      icon={ADD_QUESTION_ICON}
      onPress={handleAddQuestion}
      title={ADD_QUESTION_TITLE}
    />
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{ADD_QUIZ_TITLE}</Text>
      <FlatList
        ListFooterComponent={ListFooterComponent}
        data={quizzes}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      {!!isVisible && <AddQuizModal onClose={handleClose} />}
      <CustomButton
        icon={ADD_QUESTION_ICON}
        iconSize={IconSize.Large}
        onPress={handleCompleteAddQuiz}
        style={styles.completeQuizzes}
        title={COMPLETE_ADD_QUIZ_TITLE}
      />
    </View>
  );
};
