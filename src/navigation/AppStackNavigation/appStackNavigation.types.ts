import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CourseScreenParams } from 'screens/CourseScreen/courseScreen.type';

export enum AppStackNavigationTypes {
  BottomTab = 'BottomTab',
  CourseScreen = 'CourseScreen',
  QuizScreen = 'QuizScreen',
  QuizResultScreen = 'QuizResultScreen',
}

export type AppStackParamList = {
  [AppStackNavigationTypes.BottomTab]: undefined;
  [AppStackNavigationTypes.CourseScreen]: CourseScreenParams;
  [AppStackNavigationTypes.QuizScreen]: undefined;
  [AppStackNavigationTypes.QuizResultScreen]: undefined;
};

export type CourseScreenProps = NativeStackScreenProps<
  AppStackParamList,
  AppStackNavigationTypes.CourseScreen
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
