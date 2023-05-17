import { NativeStackScreenProps } from '@react-navigation/native-stack';

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

export type WelcomeScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  AuthStackNavigationTypes.WelcomeScreen
>;

export type SignInScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  AuthStackNavigationTypes.SignInScreen
>;
