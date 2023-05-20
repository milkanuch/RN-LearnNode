import { FlatList, ListRenderItem, View } from 'react-native';

import { AppLoadingScreen } from 'screens/AppLoadingScreen/AppLoadingScreen';

import { useGetCoursesQuery } from 'services/courses';
import { Course } from 'services/courses/course.types';

import { EmptyCoursesListComponent } from './EmptyCoursesListComponent/EmptyCoursesListComponent';
import { SectionsItem } from './SectionsItem/SectionsItem';

import { styles } from './homeScreen.styles';

const renderItem: ListRenderItem<Course> = ({ item }) => (
  <SectionsItem description={item.description} id={item.id} name={item.name} />
);

const keyExtractor = (item: Course) => item.id;

export const HomeScreen = () => {
  const { data: courses, isLoading } = useGetCoursesQuery();

  if (isLoading) return <AppLoadingScreen />;

  return (
    <View style={styles.screen}>
      <FlatList
        ListEmptyComponent={EmptyCoursesListComponent}
        data={courses?.course}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
