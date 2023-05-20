import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Edge } from 'react-native-safe-area-context';

export const WELCOME_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

export const SIGN_IN_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

export const SIGN_UP_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};
export const EDGES: readonly Edge[] = ['top', 'right', 'left'];
