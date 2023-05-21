import type { TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';

import { SIZES } from 'constants/sizes/sizes';

export enum ButtonSize {
  Small = 'small',
  Large = 'large',
}

export enum IconSize {
  Small = SIZES.XL,
  Medium = SIZES.XXL,
  Large = SIZES.XXXL,
}

export type CustomButtonProps = TouchableOpacityProps & {
  title?: string;
  icon?: string;
  leftIcon?: string;
  titleStyle?: TextStyle;
  iconSize?: IconSize;
  buttonType?: ButtonSize;
};
