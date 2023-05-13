export enum AuthStackNavigationTypes {
  WelcomeScreen = 'WelcomeScreen',
  SignInScreen = 'SignInScreen',
  SignUpScreen = 'SignUpScreen',
}

export type AuthStackParamList = {
  [AuthStackNavigationTypes.WelcomeScreen]: undefined;
  [AuthStackNavigationTypes.SignInScreen]: undefined;
  [AuthStackNavigationTypes.SignUpScreen]: undefined;
};
