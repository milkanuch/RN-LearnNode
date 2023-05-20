import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const BOTTOM_TAB_NAVIGATION_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

export const QUIZ_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: true,
};

export const QUIZ_RESULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: true,
};

export const COURSE_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackTitle: '',
  headerTitle: 'Course',
};
