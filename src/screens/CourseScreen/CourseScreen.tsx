import { FC } from 'react';
import { View, Text } from 'react-native';

import { styles } from './courseScreen.styles';
import { CourseScreenProps } from 'navigation/AppStackNavigation/appStackNavigation.types';

export const CourseScreen: FC<CourseScreenProps> = () => {
  return (
    <View style={styles.screen}>
      <Text>CourseScreen</Text>
    </View>
  );
};
