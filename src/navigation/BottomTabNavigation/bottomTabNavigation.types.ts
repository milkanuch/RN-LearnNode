export enum BottomTabNavigationTypes {
  DrawerNavigation = 'DrawerNavigation',
  ProfileStack = 'ProfileStack',
}

export type BottomTabParamList = {
  [BottomTabNavigationTypes.DrawerNavigation]: undefined;
  [BottomTabNavigationTypes.ProfileStack]: undefined;
};
