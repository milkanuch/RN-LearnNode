import { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from 'components/CustomButton/customButton.styles';

import { ButtonSize, CustomButtonProps } from './customButton.types';

export const CustomButton: FC<CustomButtonProps> = ({
  onPress: handlePress,
  title,
  icon,
  iconSize,
  children,
  buttonType = ButtonSize.Large,
  ...props
}) => (
  <TouchableOpacity
    onPress={handlePress}
    style={[styles.button, !!icon && styles.icon]}
    {...props}>
    {!!title && <Text style={[styles[buttonType], styles.text]}>{title}</Text>}
    {!!icon && <Icon name={icon} size={iconSize} style={styles.icon} />}
    {children}
  </TouchableOpacity>
);
