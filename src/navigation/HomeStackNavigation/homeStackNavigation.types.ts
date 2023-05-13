export enum HomeStackNavigationTypes {
  HomeScreen = 'HomeScreen',
  CourseScreen = 'CourseScreen',
}

export type HomeStackParamList = {
  [HomeStackNavigationTypes.HomeScreen]: undefined;
  [HomeStackNavigationTypes.CourseScreen]: undefined;
};
