import { FC } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { IconSize } from 'components/CustomButton/customButton.types';

import {
  BUTTON_TITLE,
  ICON_NAME,
  SUBTITLE,
  TITLE,
  WELCOME_SCREEN_LOGO,
} from './welcomeScreen.settings';
import { styles } from './welcomeScreen.styles';
import {
  AuthStackNavigationTypes,
  WelcomeScreenProps,
} from 'navigation/AuthStackNavigation/authStackNavigation.types';

export const WelcomeScreen: FC<WelcomeScreenProps> = ({ navigation }) => {
  const handleContinuePress = () => {
    navigation.navigate(AuthStackNavigationTypes.SignInScreen);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.screenContainer}
      style={styles.screen}>
      <View>
        <Image source={WELCOME_SCREEN_LOGO} style={styles.logo} />
        <Text style={styles.title}>{TITLE}</Text>
        <Text style={styles.title}>{SUBTITLE}</Text>
      </View>
      <CustomButton
        icon={ICON_NAME}
        iconSize={IconSize.Medium}
        onPress={handleContinuePress}
        style={styles.button}
        title={BUTTON_TITLE}
      />
    </ScrollView>
  );
};
