import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AddQuizScreen } from 'screens/AddQuizScreen/AddQuizScreen';
import { CourseScreen } from 'screens/CourseScreen/CourseScreen';
import { QuizResultScreen } from 'screens/QuizResultScreen/QuizResultScreen';
import { QuizScreen } from 'screens/QuizScreen/QuizScreen';

import { BottomTabNavigation } from 'navigation/BottomTabNavigation/BottomTabNavigation';

import {
  QUIZ_SCREEN_OPTIONS,
  QUIZ_RESULT_SCREEN_OPTIONS,
  BOTTOM_TAB_NAVIGATION_OPTIONS,
  COURSE_SCREEN_OPTIONS,
  ADD_QUIZ_SCREEN_OPTIONS,
} from './appStackNavigation.settings';
import {
  AppStackNavigationTypes,
  AppStackParamList,
} from './appStackNavigation.types';

const NativeStack = createNativeStackNavigator<AppStackParamList>();

export const AppStackNavigation = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        component={BottomTabNavigation}
        name={AppStackNavigationTypes.BottomTab}
        options={BOTTOM_TAB_NAVIGATION_OPTIONS}
      />
      <NativeStack.Screen
        component={CourseScreen}
        name={AppStackNavigationTypes.CourseScreen}
        options={COURSE_SCREEN_OPTIONS}
      />
      <NativeStack.Screen
        component={QuizScreen}
        name={AppStackNavigationTypes.QuizScreen}
        options={QUIZ_SCREEN_OPTIONS}
      />
      <NativeStack.Screen
        component={AddQuizScreen}
        name={AppStackNavigationTypes.AddQuizScreen}
        options={ADD_QUIZ_SCREEN_OPTIONS}
      />
      <NativeStack.Screen
        component={QuizResultScreen}
        name={AppStackNavigationTypes.QuizResultScreen}
        options={QUIZ_RESULT_SCREEN_OPTIONS}
      />
    </NativeStack.Navigator>
  );
};
