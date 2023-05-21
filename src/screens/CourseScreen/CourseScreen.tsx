import { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { CustomButton } from 'components/CustomButton/CustomButton';

import { useGetCourseByIdQuery } from 'services/courses';

import {
  CREATE_QUIZ_BUTTON_TITLE,
  START_QUIZ_BUTTON_TITLE,
} from './courseScreen.settings';
import { styles } from './courseScreen.styles';
import {
  AppStackNavigationTypes,
  CourseScreenProps,
} from 'navigation/AppStackNavigation/appStackNavigation.types';

export const CourseScreen: FC<CourseScreenProps> = ({ route, navigation }) => {
  const { id } = route.params;
  const { data } = useGetCourseByIdQuery(id);

  const handleCreateQuiz = () => {
    navigation.navigate(AppStackNavigationTypes.AddQuizScreen, { id });
  };

  const handleStartQuiz = () => {
    navigation.navigate(AppStackNavigationTypes.QuizScreen, { id });
  };

  const isCreateButtonAvailable = data && !data?.quizzes?.length;

  return (
    <ScrollView
      contentContainerStyle={styles.screenContainer}
      style={styles.screen}>
      <Text style={styles.title}>{data?.name}</Text>
      <Text style={styles.description}>{data?.description}</Text>
      <View style={styles.buttonsContainer}>
        {!!isCreateButtonAvailable && (
          <CustomButton
            onPress={handleCreateQuiz}
            style={styles.button}
            title={CREATE_QUIZ_BUTTON_TITLE}
          />
        )}
        <CustomButton
          onPress={handleStartQuiz}
          style={isCreateButtonAvailable ? styles.button : styles.startButton}
          title={START_QUIZ_BUTTON_TITLE}
        />
      </View>
    </ScrollView>
  );
};
