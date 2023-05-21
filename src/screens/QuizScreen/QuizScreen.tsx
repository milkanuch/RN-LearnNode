import { FC, useState } from 'react';
import { View, Text, ListRenderItem, FlatList } from 'react-native';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';

import { AppLoadingScreen } from 'screens/AppLoadingScreen/AppLoadingScreen';

import { useGetQuizByIdQuery } from 'services/quiz';

import { QuizAnswerItem } from './QuizAnswerItem/QuizAnswerItem';

import {
  FINISH_BUTTON_TITLE,
  NEXT_BUTTON_ICON,
  NEXT_BUTTON_TITLE,
  PREVIOUS_BUTTON_ICON,
  PREVIOUS_BUTTON_TITLE,
} from './quizScreen.settings';
import { styles } from './quizScreen.styles';
import {
  AppStackNavigationTypes,
  QuizScreenProps,
} from 'navigation/AppStackNavigation/appStackNavigation.types';

const keyExtractor = (item: string) => item;

export const QuizScreen: FC<QuizScreenProps> = ({ route, navigation }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);

  const { id } = route.params;
  const { data, isLoading } = useGetQuizByIdQuery(id);

  const handleAnswerPress = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handlePreviousPress = () => {
    const isPreviousAvailable = currentQuizIndex >= 0;

    setCurrentQuizIndex(isPreviousAvailable ? currentQuizIndex - 1 : 0);
    setSelectedAnswer(answers[currentQuizIndex - 1] || '');
  };

  const handleContinuePress = () => {
    const isNextAvailable =
      currentQuizIndex >= 0 && data && currentQuizIndex + 1 < data.length;

    setAnswers(prev => [
      ...prev,
      (answers[currentQuizIndex] = selectedAnswer || ''),
    ]);
    if (data && currentQuizIndex === data.length - 1) {
      navigation.navigate(AppStackNavigationTypes.QuizResultScreen, { id });
    }

    setCurrentQuizIndex(isNextAvailable ? currentQuizIndex + 1 : 0);
  };

  const renderItem: ListRenderItem<string> = ({ item }) => (
    <QuizAnswerItem
      activeAnswer={selectedAnswer}
      answer={item}
      onPress={handleAnswerPress}
    />
  );

  const ListHeaderComponent = data && (
    <Text style={styles.questionTitle}>{data[currentQuizIndex].question}</Text>
  );
  const rightButtonTitle =
    data && currentQuizIndex === data.length - 1
      ? FINISH_BUTTON_TITLE
      : NEXT_BUTTON_TITLE;

  const isRightButtonDisabled =
    !selectedAnswer || (data && currentQuizIndex === data.length);
  const isLeftButtonDisabled = currentQuizIndex === 0;

  if (isLoading) return <AppLoadingScreen />;

  return data ? (
    <View style={styles.screen}>
      <View style={styles.progressContainer}>
        <ProgressBar
          currentProgress={currentQuizIndex}
          progressBarContainerStyle={styles.progressBarContainer}
          progressEndpoint={data.length}
        />
        <Text
          style={
            styles.progressDescription
          }>{`${currentQuizIndex}/${data.length}`}</Text>
      </View>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={data[currentQuizIndex].answers}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.buttonsContainer}>
        <CustomButton
          disabled={isLeftButtonDisabled}
          leftIcon={PREVIOUS_BUTTON_ICON}
          onPress={handlePreviousPress}
          style={[
            styles.continueButton,
            styles.button,
            isLeftButtonDisabled && styles.disabledButton,
          ]}
          title={PREVIOUS_BUTTON_TITLE}
        />
        <CustomButton
          disabled={isRightButtonDisabled}
          icon={NEXT_BUTTON_ICON}
          onPress={handleContinuePress}
          style={[
            styles.continueButton,
            styles.button,
            isRightButtonDisabled && styles.disabledButton,
          ]}
          title={rightButtonTitle}
        />
      </View>
    </View>
  ) : null;
};
