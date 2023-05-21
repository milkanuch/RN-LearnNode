import { FC } from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import { Title } from 'components/Title/Title';

import { AppLoadingScreen } from 'screens/AppLoadingScreen/AppLoadingScreen';

import { useSetQuizResultMutation } from 'services/result';

import { getUserQuizScore } from './quizResultScreen.utils';

import {
  COMPLETE_QUIZ_BUTTON_TITLE,
  RESULT_DESCRIPTION,
  RESULT_TITLE,
} from './quizResultScreen.settings';
import { styles } from './quizResultScreen.styles';
import {
  AppStackNavigationTypes,
  QuizResultScreenProps,
} from 'navigation/AppStackNavigation/appStackNavigation.types';
import { EDGES } from 'navigation/AuthStackNavigation/authStackNavigation.settings';

const renderItem: ListRenderItem<string> = ({ item }) => (
  <Text style={styles.answerItem}>{item}</Text>
);

const keyExtractor = (item: string) => item + Math.random();

export const QuizResultScreen: FC<QuizResultScreenProps> = ({
  route,
  navigation,
}) => {
  const [setQuizResult, { isLoading }] = useSetQuizResultMutation();

  const { id, answers, quizzes } = route.params;
  const userScore = getUserQuizScore(answers, quizzes);
  const quizLength = quizzes.length;
  const scoreTitle = `${RESULT_DESCRIPTION} ${userScore} right answers`;

  const handleCompleteQuizPress = async () => {
    const result = await setQuizResult({ id, userScore, quizLength });

    if ('data' in result) {
      navigation.navigate(AppStackNavigationTypes.BottomTab);
    }
  };

  if (isLoading) return <AppLoadingScreen />;

  return (
    <SafeAreaView edges={EDGES} style={styles.screen}>
      <Title title={RESULT_TITLE} />
      <View style={styles.progressContainer}>
        <ProgressBar
          currentProgress={userScore}
          progressBarContainerStyle={styles.progressBarContainer}
          progressEndpoint={quizLength}
        />
        <Text
          style={
            styles.progressDescription
          }>{`${userScore}/${quizLength}`}</Text>
      </View>
      <Title title={scoreTitle} />
      <FlatList
        data={answers}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        style={styles.answersList}
      />
      <CustomButton
        onPress={handleCompleteQuizPress}
        style={styles.completeButton}
        title={COMPLETE_QUIZ_BUTTON_TITLE}
      />
    </SafeAreaView>
  );
};
