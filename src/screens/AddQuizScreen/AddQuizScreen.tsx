import { FC, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { IconSize } from 'components/CustomButton/customButton.types';

import { AppLoadingScreen } from 'screens/AppLoadingScreen/AppLoadingScreen';

import { useCreateQuizMutation } from 'services/quiz';
import {
  removeAllQuizzes,
  removeQuizByQuestion,
  selectQuizzes,
} from 'store/addQuizSlice/addQuizSlice';
import { Quiz } from 'store/addQuizSlice/addQuizSlice.types';
import { useAppDispatch, useAppSelector } from 'store/index';

import { AddQuizModal } from './AddQuizModal/AddQuizModal';

import {
  ADD_QUESTION_ICON,
  ADD_QUESTION_TITLE,
  ADD_QUIZ_TITLE,
  COMPLETE_ADD_QUIZ_TITLE,
} from './addQuizScreen.settings';
import { styles } from './addQuizScreen.styles';
import { AddQuizScreenProps } from 'navigation/AppStackNavigation/appStackNavigation.types';

const keyExtractor = (item: Quiz, index: number) => item.question + index;

export const AddQuizScreen: FC<AddQuizScreenProps> = ({
  route,
  navigation,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const quizzes = useAppSelector(selectQuizzes);
  const dispatch = useAppDispatch();
  const [createQuiz, { isLoading }] = useCreateQuizMutation();
  const { id } = route.params;

  const handleAddQuestion = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDeleteQuestion = (question: string) => {
    dispatch(removeQuizByQuestion(question));
  };

  const handleCompleteAddQuiz = async () => {
    if (id && quizzes.length > 0) {
      await createQuiz({ id, quizzes });
    }

    dispatch(removeAllQuizzes());
    navigation.goBack();
  };

  const ListFooterComponent = (
    <CustomButton
      icon={ADD_QUESTION_ICON}
      onPress={handleAddQuestion}
      title={ADD_QUESTION_TITLE}
    />
  );

  const renderItem: ListRenderItem<Quiz> = ({ item }) => {
    const handleDelete = () => {
      handleDeleteQuestion(item.question);
    };

    return (
      <TouchableOpacity onLongPress={handleDelete}>
        <Text style={styles.questionTitle}>{item.question}</Text>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return <AppLoadingScreen />;
  }

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
