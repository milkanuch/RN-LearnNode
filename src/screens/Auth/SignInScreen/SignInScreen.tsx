import { FC } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInput';
import { Title } from 'components/Title/Title';

import { COLORS } from 'constants/colors/colors';

import { useSignInMutation } from 'services/user';

import { signInScheme } from './signInScreen.schema';

import {
  CONTINUE_TITLE,
  DEFAULT_VALUE,
  EMAIL_INPUT_SETTINGS,
  FORM_MODE,
  PASSWORD_SETTINGS,
  SIGN_UP_TITLE,
  TITLE,
} from './signInScreen.settings';
import { styles } from './signInScreen.styles';
import { SignInForm } from './signInScreen.types';
import {
  AuthStackNavigationTypes,
  SignInScreenProps,
} from 'navigation/AuthStackNavigation/authStackNavigation.types';

export const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: yupResolver(signInScheme),
    mode: FORM_MODE,
  });

  const [signIn, { isLoading }] = useSignInMutation();

  const handleContinuePress = async () => {
    const { email, password } = getValues();

    await signIn({ email, password });
  };

  const handleSignUpPress = () => {
    navigation.navigate(AuthStackNavigationTypes.SignUpScreen);
  };

  if (isLoading)
    return (
      <ActivityIndicator
        color={COLORS.purple}
        size={'large'}
        style={styles.screenContainer}
      />
    );

  return (
    <ScrollView
      contentContainerStyle={styles.screenContainer}
      style={styles.screen}>
      <Title title={TITLE} />
      <Controller
        control={control}
        defaultValue={DEFAULT_VALUE}
        name={EMAIL_INPUT_SETTINGS.name}
        render={({
          field: { onChange: handleEmailInput, onBlur: handleOnBlur, value },
        }) => (
          <CustomTextInput
            error={errors.email?.message}
            label={EMAIL_INPUT_SETTINGS.label}
            onBlur={handleOnBlur}
            onChangeText={handleEmailInput}
            placeholder={EMAIL_INPUT_SETTINGS.placeholder}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        defaultValue={DEFAULT_VALUE}
        name={PASSWORD_SETTINGS.name}
        render={({
          field: { onChange: handlePasswordInput, onBlur: handleOnBlur, value },
        }) => (
          <CustomTextInput
            error={errors.password?.message}
            label={PASSWORD_SETTINGS.label}
            onBlur={handleOnBlur}
            onChangeText={handlePasswordInput}
            placeholder={PASSWORD_SETTINGS.placeholder}
            secureTextEntry={PASSWORD_SETTINGS.secureTextEntry}
            value={value}
          />
        )}
      />
      <CustomButton
        onPress={handleSubmit(handleContinuePress)}
        style={styles.continueButton}
        title={CONTINUE_TITLE}
      />
      <CustomButton
        onPress={handleSignUpPress}
        style={styles.signUpButton}
        title={SIGN_UP_TITLE}
        titleStyle={styles.signUpButtonText}
      />
    </ScrollView>
  );
};
