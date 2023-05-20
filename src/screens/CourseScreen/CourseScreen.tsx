import { FC } from 'react';
import { ScrollView, Text } from 'react-native';

import { useGetCourseByIdQuery } from 'services/courses';

import { styles } from './courseScreen.styles';
import { CourseScreenProps } from 'navigation/AppStackNavigation/appStackNavigation.types';

export const CourseScreen: FC<CourseScreenProps> = ({ route }) => {
  const { id } = route.params;
  const { data } = useGetCourseByIdQuery(id);

  return (
    <ScrollView
      contentContainerStyle={styles.screenContainer}
      style={styles.screen}>
      <Text style={styles.title}>{data?.name}</Text>
      <Text style={styles.title}>{data?.description}</Text>
    </ScrollView>
  );
};
