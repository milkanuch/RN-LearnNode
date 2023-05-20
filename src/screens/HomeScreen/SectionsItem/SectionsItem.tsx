import { FC } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { IconSize } from 'components/CustomButton/customButton.types';

import { Course } from 'services/courses/course.types';

import { BUTTON_TITLE, ICON_NAME } from './sectionsItem.settings';
import { styles } from './sectionsItem.styles';
import { AppStackNavigationTypes } from 'navigation/AppStackNavigation/appStackNavigation.types';

export const SectionsItem: FC<Course> = ({ _id, name, description }) => {
  const { navigate } = useNavigation();

  const handleSectionPress = () => {
    navigate(AppStackNavigationTypes.CourseScreen, { id: _id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
        <Text numberOfLines={4} style={styles.description}>
          {description}
        </Text>
      </View>
      <CustomButton
        icon={ICON_NAME}
        iconSize={IconSize.Large}
        onPress={handleSectionPress}
        style={styles.button}
        title={BUTTON_TITLE}
      />
    </View>
  );
};
