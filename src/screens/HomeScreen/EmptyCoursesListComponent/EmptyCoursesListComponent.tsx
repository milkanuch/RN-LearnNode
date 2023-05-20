import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  NO_COURSES_ICON_COLOR,
  NO_COURSES_ICON_NAME,
  NO_COURSES_ICON_SIZE,
  NO_COURSES_TEXT,
} from './emptyCoursesListComponent.settings';
import { styles } from './emptyCoursesListComponent.styles';

export const EmptyCoursesListComponent = () => {
  return (
    <View style={styles.screen}>
      <Icon
        color={NO_COURSES_ICON_COLOR}
        name={NO_COURSES_ICON_NAME}
        size={NO_COURSES_ICON_SIZE}
      />
      <Text style={styles.title}>{NO_COURSES_TEXT}</Text>
    </View>
  );
};
