export enum AppStackNavigationTypes {
  BottomTab = 'BottomTab',
  QuizScreen = 'QuizScreen',
  QuizResultScreen = 'QuizResultScreen',
}

export type AppStackParamList = {
  [AppStackNavigationTypes.BottomTab]: undefined;
  [AppStackNavigationTypes.QuizScreen]: undefined;
  [AppStackNavigationTypes.QuizResultScreen]: undefined;
};
