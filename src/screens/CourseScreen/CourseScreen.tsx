import { FC } from 'react';
import { ScrollView, Text } from 'react-native';

import { CustomButton } from 'components/CustomButton/CustomButton';

import { useGetCourseByIdQuery } from 'services/courses';

import { START_QUIZ_BUTTON_TITLE } from './courseScreen.settings';
import { styles } from './courseScreen.styles';
import {
  AppStackNavigationTypes,
  CourseScreenProps,
} from 'navigation/AppStackNavigation/appStackNavigation.types';

export const CourseScreen: FC<CourseScreenProps> = ({ route, navigation }) => {
  const { id } = route.params;
  const { data } = useGetCourseByIdQuery(id);

  const handleStartQuiz = () => {
    navigation.navigate(AppStackNavigationTypes.AddQuizScreen, { id });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.screenContainer}
      style={styles.screen}>
      <Text style={styles.title}>{data?.name}</Text>
      <Text style={styles.description}>{data?.description}</Text>
      <CustomButton onPress={handleStartQuiz} title={START_QUIZ_BUTTON_TITLE} />
    </ScrollView>
  );
};
