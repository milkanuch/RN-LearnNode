import { ScrollView, Text, View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInput';
import { Title } from 'components/Title/Title';

import { AppLoadingScreen } from 'screens/AppLoadingScreen/AppLoadingScreen';

import { useSignUpMutation } from 'services/user';
import { useAppDispatch } from 'store/index';
import { setIsUserLogged } from 'store/userSlice/userSlice';

import { signUpScheme } from './signUpScreen.scheme';

import {
  CONFIRM_PASSWORD_SETTINGS,
  DEFAULT_VALUE,
  EMAIL_INPUT_SETTINGS,
  FORM_MODE,
  NICKNAME_INPUT_SETTINGS,
  PASSWORD_SETTINGS,
  SIGN_UP_TITLE,
  TITLE,
} from './signUpScreen.settings';
import { styles } from './signUpScreen.styles';
import { SignUpForm } from './signUpScreen.types';

export const SignUpScreen = () => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(signUpScheme),
    mode: FORM_MODE,
  });
  const [signUp, { isLoading, error }] = useSignUpMutation();
  const dispatch = useAppDispatch();

  const handleSignUpPress = async () => {
    const values = getValues();
    const result = await signUp(values);

    if ('data' in result && result.data) {
      dispatch(setIsUserLogged(true));
    }
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
        name={NICKNAME_INPUT_SETTINGS.name}
        render={({
          field: { onChange: handleNicknameInput, onBlur: handleOnBlur, value },
        }) => (
          <CustomTextInput
            error={errors.nickname?.message}
            label={NICKNAME_INPUT_SETTINGS.label}
            onBlur={handleOnBlur}
            onChangeText={handleNicknameInput}
            placeholder={NICKNAME_INPUT_SETTINGS.placeholder}
            value={value}
          />
        )}
      />
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
      <View style={styles.passwordInputsContainer}>
        <Controller
          control={control}
          defaultValue={DEFAULT_VALUE}
          name={PASSWORD_SETTINGS.name}
          render={({
            field: {
              onChange: handlePasswordInput,
              onBlur: handleOnBlur,
              value,
            },
          }) => (
            <CustomTextInput
              autoCapitalize={PASSWORD_SETTINGS.autoCapitalize}
              contentContainerStyle={styles.passwordInput}
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
        <Controller
          control={control}
          defaultValue={DEFAULT_VALUE}
          name={CONFIRM_PASSWORD_SETTINGS.name}
          render={({
            field: {
              onChange: handleConfirmPasswordInput,
              onBlur: handleOnBlur,
              value,
            },
          }) => (
            <CustomTextInput
              autoCapitalize={CONFIRM_PASSWORD_SETTINGS.autoCapitalize}
              contentContainerStyle={styles.passwordInput}
              error={errors.confirmPassword?.message}
              label={CONFIRM_PASSWORD_SETTINGS.label}
              onBlur={handleOnBlur}
              onChangeText={handleConfirmPasswordInput}
              placeholder={CONFIRM_PASSWORD_SETTINGS.placeholder}
              secureTextEntry={CONFIRM_PASSWORD_SETTINGS.secureTextEntry}
              value={value}
            />
          )}
        />
      </View>
      {!!error && (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Text style={styles.error}>{error.data.message}</Text>
      )}
      <CustomButton
        onPress={handleSubmit(handleSignUpPress)}
        style={styles.continueButton}
        title={SIGN_UP_TITLE}
      />
    </ScrollView>
  );
};
