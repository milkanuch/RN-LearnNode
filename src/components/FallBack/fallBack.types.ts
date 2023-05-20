import { TouchableOpacityProps } from 'react-native/types';

export interface FallBackProps {
  error: Error;
  resetError: TouchableOpacityProps['onPress'];
}
