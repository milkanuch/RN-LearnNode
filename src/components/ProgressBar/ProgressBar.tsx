import React, { useEffect, FC } from 'react';
import { View } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {
  PROGRESS_BAR_ANIMATION_DURATION,
  PROGRESS_TO_PERCENTAGE_MULTIPLIER,
} from './progressBar.settings';
import { styles } from './progressBar.styles';
import { ProgressBarProps } from './progressBar.types';

export const ProgressBar: FC<ProgressBarProps> = ({
  currentProgress,
  progressEndpoint,
  progressBarStyle,
  progressBarContainerStyle,
}) => {
  const progress = useSharedValue(0);
  const progressBarWidth = useAnimatedStyle(() => {
    return {
      width: `${
        (progress.value / progressEndpoint) * PROGRESS_TO_PERCENTAGE_MULTIPLIER
      }%`,
    };
  }, [currentProgress]);

  useEffect(() => {
    progress.value = withTiming(currentProgress, {
      duration: PROGRESS_BAR_ANIMATION_DURATION,
    });

    return () => {
      progress.value = 0;
    };
  }, [progress, currentProgress, progressEndpoint]);

  return (
    <View style={[styles.progressBarContainer, progressBarContainerStyle]}>
      <Animated.View
        style={[styles.progressBar, progressBarWidth, progressBarStyle]}
      />
    </View>
  );
};
