import { FlatList, ListRenderItem, RefreshControl, View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInput';
import { Title } from 'components/Title/Title';

import { AppLoadingScreen } from 'screens/AppLoadingScreen/AppLoadingScreen';

import { useGetAllQuizResultsQuery } from 'services/result';
import { AllQuizResult } from 'services/result/result.types';
import {
  useGetCurrentUserQuery,
  useUpdateCurrentUserMutation,
} from 'services/user';
import { useAppDispatch } from 'store/index';
import { setUserEmail, setUserNickname } from 'store/userSlice/userSlice';

import { ProfileSectionItem } from './ProfileSectionItem/ProfileSectionItem';
import { profileScheme } from './profileScreen.scheme';

import {
  EMAIL_INPUT_SETTINGS,
  FORM_MODE,
  NICKNAME_INPUT_SETTINGS,
  SAVE_BUTTON_TITLE,
  USER_RESULT_TITLE,
} from './profileScreen.settings';
import { styles } from './profileScreen.styles';
import { ProfileForm } from './profileScreen.types';

const keyExtractor = (_: AllQuizResult, index: number) =>
  (index + Math.random()).toString();

const renderItem: ListRenderItem<AllQuizResult> = ({ item }) => (
  <ProfileSectionItem
    courseName={item.courseName}
    quizLength={item.quizLength}
    userScore={item.userScore}
  />
);

export const ProfileScreen = () => {
  const {
    data: userData,
    isLoading,
    isFetching: isFetchingUser,
    refetch: refetchUserInformation,
  } = useGetCurrentUserQuery();
  const {
    data: userQuizResults,
    isFetching: isFetchingResults,
    refetch: refetchQuizzes,
  } = useGetAllQuizResultsQuery();
  const [updateCurrentUser, { isLoading: isUpdatingInformation }] =
    useUpdateCurrentUserMutation();

  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileForm>({
    mode: FORM_MODE,
    resolver: yupResolver(profileScheme),
  });

  const handleUpdateProfile = async (data: ProfileForm) => {
    const { email, nickname } = data;

    const result = await updateCurrentUser({ email, nickname });

    if ('data' in result) {
      dispatch(setUserEmail(email));
      dispatch(setUserNickname(nickname));
    }
  };

  const handleRefresh = () => {
    refetchUserInformation();
    refetchQuizzes();
  };

  const refreshControl = (
    <RefreshControl
      onRefresh={handleRefresh}
      refreshing={isFetchingResults || isFetchingUser}
    />
  );

  if (isLoading || isUpdatingInformation || isFetchingResults || isFetchingUser)
    return <AppLoadingScreen />;

  return (
    <View style={styles.screen}>
      <Controller
        control={control}
        defaultValue={userData?.email}
        name={EMAIL_INPUT_SETTINGS.name}
        render={({
          field: { onChange: handleEmailInput, onBlur: handleEmailBlur, value },
        }) => (
          <CustomTextInput
            error={errors.email?.message}
            label={EMAIL_INPUT_SETTINGS.label}
            onBlur={handleEmailBlur}
            onChangeText={handleEmailInput}
            placeholder={EMAIL_INPUT_SETTINGS.placeholder}
            style={styles.input}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        defaultValue={userData?.nickname}
        name={NICKNAME_INPUT_SETTINGS.name}
        render={({
          field: {
            onChange: handleNicknameInput,
            onBlur: handleNicknameBlur,
            value,
          },
        }) => (
          <CustomTextInput
            error={errors.nickname?.message}
            label={NICKNAME_INPUT_SETTINGS.label}
            onBlur={handleNicknameBlur}
            onChangeText={handleNicknameInput}
            placeholder={NICKNAME_INPUT_SETTINGS.placeholder}
            style={styles.input}
            value={value}
          />
        )}
      />
      <CustomButton
        onPress={handleSubmit(handleUpdateProfile)}
        style={styles.saveButton}
        title={SAVE_BUTTON_TITLE}
      />
      <Title title={USER_RESULT_TITLE} />
      <FlatList
        data={userQuizResults}
        keyExtractor={keyExtractor}
        refreshControl={refreshControl}
        renderItem={renderItem}
      />
    </View>
  );
};
