import { Dimensions, Platform } from 'react-native';

export const PERCENTAGE = 100;

export const SIZES = {
  XXXXS: 2,
  XXXS: 4,
  XXS: 6,
  XS: 8,
  S: 10,
  M: 12,
  L: 14,
  XL: 16,
  XXL: 18,
  XXXL: 20,
  XXXXL: 22,
};

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

export const { height, width } = Dimensions.get('window');

export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const SCREEN_PADDING = SIZES.M;

export const CORRECT_WIDTH = width - SCREEN_PADDING;

export const CORRECT_HEIGHT = height + Math.abs(SCREEN_HEIGHT - height);

export const responsiveWidth = (value: number): number =>
  CORRECT_WIDTH * (value / PERCENTAGE);

export const responsiveHeight = (value: number): number =>
  CORRECT_HEIGHT * (value / PERCENTAGE);
