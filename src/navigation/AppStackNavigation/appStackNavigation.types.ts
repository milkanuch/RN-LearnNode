import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AddQuizScreenParams } from 'screens/AddQuizScreen/addQuizScreen.types';
import { CourseScreenParams } from 'screens/CourseScreen/courseScreen.type';

export enum AppStackNavigationTypes {
  BottomTab = 'BottomTab',
  CourseScreen = 'CourseScreen',
  QuizScreen = 'QuizScreen',
  AddQuizScreen = 'AddQuizScreen',
  QuizResultScreen = 'QuizResultScreen',
}

export type AppStackParamList = {
  [AppStackNavigationTypes.BottomTab]: undefined;
  [AppStackNavigationTypes.QuizScreen]: undefined;
  [AppStackNavigationTypes.CourseScreen]: CourseScreenParams;
  [AppStackNavigationTypes.AddQuizScreen]: AddQuizScreenParams;
  [AppStackNavigationTypes.QuizResultScreen]: undefined;
};

export type CourseScreenProps = NativeStackScreenProps<
  AppStackParamList,
  AppStackNavigationTypes.CourseScreen
>;

export type AddQuizScreenProps = NativeStackScreenProps<
  AppStackParamList,
  AppStackNavigationTypes.AddQuizScreen
>;

//NOTE: This eslint rules is unnecessary here
//SOURCE: https://reactnavigation.org/docs/typescript/#organizing-types
declare global {
  //eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    //eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends AppStackParamList {}
  }
}
