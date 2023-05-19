import { useEffect, useState } from 'react';
import { Text, FlatList, ListRenderItem, View } from 'react-native';

import { Title } from 'components/Title/Title';

import { EmptyCoursesListComponent } from './EmptyCoursesListComponent/EmptyCoursesListComponent';

import { TITLE } from './homeScreen.settings';
import { styles } from './homeScreen.styles';

const renderItem: ListRenderItem<string> = () => <Text>Item</Text>;

const keyExtractor = (item: string) => item;

export const HomeScreen = () => {
  const [courses, setCourses] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    setCourses(undefined);
  }, []);

  return (
    <View style={styles.screen}>
      <Title title={TITLE} />
      <FlatList
        ListEmptyComponent={EmptyCoursesListComponent}
        data={courses}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};
