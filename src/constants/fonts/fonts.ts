import { IS_ANDROID } from 'constants/sizes/sizes';

import { Font } from './fonts.types';

export const SPACE_MONO_REGULAR: Font = {
  fontFamily: IS_ANDROID ? 'SpaceMono-Regular' : 'Courier',
  fontWeight: '400',
};

export const SPACE_MONO_REGULAR_ITALIC: Font = {
  fontFamily: IS_ANDROID ? 'SpaceMono-Regular' : 'Courier',
  fontWeight: '400',
  fontStyle: 'italic',
};

export const SPACE_MONO_BOLD: Font = {
  fontFamily: IS_ANDROID ? 'SpaceMono-Bold' : 'Courier-Bold',
  fontWeight: '700',
};

export const SPACE_MONO_BOLD_ITALIC: Font = {
  fontFamily: IS_ANDROID ? 'SpaceMono-Bold' : 'Courier-Bold',
  fontWeight: '700',
  fontStyle: 'italic',
};
