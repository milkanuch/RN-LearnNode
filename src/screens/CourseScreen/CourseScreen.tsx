import { FC } from 'react';
import { View, Text } from 'react-native';

import { useGetCourseByIdQuery } from 'services/courses';

import { styles } from './courseScreen.styles';
import { CourseScreenProps } from 'navigation/AppStackNavigation/appStackNavigation.types';

export const CourseScreen: FC<CourseScreenProps> = ({ route }) => {
  const { id } = route.params;
  const { data: courseInfo } = useGetCourseByIdQuery(id);

  return (
    <View style={styles.screen}>
      <Text>{courseInfo?.name}</Text>
    </View>
  );
};
