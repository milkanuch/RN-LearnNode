import React, { FC } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { BUTTON_TITLE, SUBTITLE, TITLE } from './fallBack.settings';
import { styles } from './fallBack.styles';
import { FallBackProps } from './fallBack.types';

export const FallBack: FC<FallBackProps> = ({
  error,
  resetError: handleResetError,
}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>{TITLE}</Text>
      <Text style={styles.subtitle}>{SUBTITLE}</Text>
      <Text style={styles.error}>{error.toString()}</Text>
      <TouchableOpacity onPress={handleResetError} style={styles.button}>
        <Text style={styles.buttonText}>{BUTTON_TITLE}</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);
