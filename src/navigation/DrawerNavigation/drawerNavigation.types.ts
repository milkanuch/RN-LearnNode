export enum DrawerNavigationTypes {
  HomeStack = 'HomeStack',
  ProfileStack = 'ProfileStack',
}

export type DrawerParamList = {
  [DrawerNavigationTypes.HomeStack]: undefined;
  [DrawerNavigationTypes.ProfileStack]: undefined;
};
