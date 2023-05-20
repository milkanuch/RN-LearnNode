import { FC } from 'react';
import { ScrollView, Text } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInput';
import { Title } from 'components/Title/Title';

import { AppLoadingScreen } from 'screens/AppLoadingScreen/AppLoadingScreen';

import { useSignInMutation } from 'services/user';
import { useAppDispatch } from 'store/index';
import { setIsUserLogged } from 'store/userSlice/userSlice';

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
  const [signIn, { isLoading, error }] = useSignInMutation();
  const dispatch = useAppDispatch();

  const handleContinuePress = async () => {
    const { email, password } = getValues();
    const result = await signIn({ email, password });

    if ('data' in result && result.data) {
      dispatch(setIsUserLogged(true));
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate(AuthStackNavigationTypes.SignUpScreen);
  };

  if (isLoading) return <AppLoadingScreen />;

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
            autoCapitalize={EMAIL_INPUT_SETTINGS.autoCapitalize}
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
            autoCapitalize={PASSWORD_SETTINGS.autoCapitalize}
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
      {!!error && (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Text style={styles.error}>{error.data.message}</Text>
      )}
    </ScrollView>
  );
};
