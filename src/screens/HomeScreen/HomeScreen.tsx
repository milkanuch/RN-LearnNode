import { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, RefreshControl, View } from 'react-native';

import { CustomButton } from 'components/CustomButton/CustomButton';

import { AppLoadingScreen } from 'screens/AppLoadingScreen/AppLoadingScreen';

import { useGetCoursesQuery } from 'services/courses';
import { Course } from 'services/courses/course.types';
import { useLazyGetCurrentUserQuery } from 'services/user';
import { useAppDispatch, useAppSelector } from 'store/index';
import {
  selectIsUserAdmin,
  selectUserEmail,
  setUserIsAdmin,
} from 'store/userSlice/userSlice';

import { AddCourseModal } from './AddCourseModal/AddCourseModal';
import { EmptyCoursesListComponent } from './EmptyCoursesListComponent/EmptyCoursesListComponent';
import { SectionsItem } from './SectionsItem/SectionsItem';
import { checkIsUserAdmin } from './homeScreen.utils';

import { ADD_COURSE_ICON } from './homeScreen.settings';
import { styles } from './homeScreen.styles';

const renderItem: ListRenderItem<Course> = ({ item }) => (
  <SectionsItem
    _id={item._id}
    description={item.description}
    name={item.name}
  />
);

const keyExtractor = (item: Course) => item._id;

export const HomeScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {
    data: courses,
    isLoading,
    refetch,
    isFetching,
  } = useGetCoursesQuery();
  const [triggerCurrentUser] = useLazyGetCurrentUserQuery();
  const userEmail = useAppSelector(selectUserEmail);
  const isUserAdmin = useAppSelector(selectIsUserAdmin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    triggerCurrentUser();
  }, [triggerCurrentUser]);

  useEffect(() => {
    if (userEmail) {
      dispatch(setUserIsAdmin(checkIsUserAdmin(userEmail)));
    }
  }, [dispatch, userEmail]);

  const handleOpenModal = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleRefresh = () => {
    refetch();
  };

  const refreshControl = (
    <RefreshControl onRefresh={handleRefresh} refreshing={isFetching} />
  );

  if (isLoading) {
    return <AppLoadingScreen />;
  }

  return (
    <View style={styles.screen}>
      <FlatList
        ListEmptyComponent={EmptyCoursesListComponent}
        data={courses}
        keyExtractor={keyExtractor}
        refreshControl={refreshControl}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      {!!isUserAdmin && (
        <CustomButton
          icon={ADD_COURSE_ICON}
          iconSize={30}
          onPress={handleOpenModal}
          style={styles.addButton}
        />
      )}
      {!!isVisible && <AddCourseModal onClose={handleClose} />}
    </View>
  );
};
