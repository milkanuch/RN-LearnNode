import { useRef, useMemo, FC } from 'react';
import { Text, View } from 'react-native';

import BottomSheet from '@gorhom/bottom-sheet';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInput';

import { COLORS } from 'constants/colors/colors';

import { useAddCourseMutation } from 'services/courses';

import { addCourseScheme } from './addCourseModal.scheme';

import {
  ADD_BUTTON_TITLE,
  ADD_COURSE_MODAL_TITLE,
  DESCRIPTION_INPUT_SETTINGS,
  FORM_MODE,
  NAME_INPUT_SETTINGS,
  SNAP_POINTS,
} from './addCourseModal.settings';
import { styles } from './addCourseModal.styles';
import { AddCourseForm, AddCourseModalProps } from './addCourseModal.types';

export const AddCourseModal: FC<AddCourseModalProps> = ({
  onClose: handleClose,
}) => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCourseForm>({
    resolver: yupResolver(addCourseScheme),
    mode: FORM_MODE,
  });

  const [addCourse] = useAddCourseMutation();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => SNAP_POINTS, []);

  const handleAddCourse = async () => {
    const values = getValues();

    const result = await addCourse(values);

    if ('data' in result && result.data) {
      handleClose();
    }
  };

  return (
    <BottomSheet
      backgroundStyle={styles.modalBackground}
      enablePanDownToClose={true}
      onClose={handleClose}
      ref={bottomSheetRef}
      snapPoints={snapPoints}>
      <View style={styles.container}>
        <Text style={styles.title}>{ADD_COURSE_MODAL_TITLE}</Text>
        <Controller
          control={control}
          name={NAME_INPUT_SETTINGS.name}
          render={({
            field: { onChange: handleNameInput, onBlur: handleNameBlur, value },
          }) => (
            <CustomTextInput
              autoCapitalize={NAME_INPUT_SETTINGS.autoCapitalize}
              error={errors.name?.message}
              errorMessageStyle={styles.errorMessage}
              label={NAME_INPUT_SETTINGS.label}
              onBlur={handleNameBlur}
              onChangeText={handleNameInput}
              placeholder={NAME_INPUT_SETTINGS.placeholder}
              placeholderTextColor={COLORS.white}
              style={styles.nameInput}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name={DESCRIPTION_INPUT_SETTINGS.name}
          render={({
            field: {
              onChange: handleDescriptionInput,
              onBlur: handleDescriptionBlur,
              value,
            },
          }) => (
            <CustomTextInput
              autoCapitalize={DESCRIPTION_INPUT_SETTINGS.autoCapitalize}
              contentContainerStyle={styles.descriptionContainer}
              error={errors.description?.message}
              errorMessageStyle={styles.errorMessage}
              label={DESCRIPTION_INPUT_SETTINGS.label}
              multiline={DESCRIPTION_INPUT_SETTINGS.multiline}
              onBlur={handleDescriptionBlur}
              onChangeText={handleDescriptionInput}
              placeholder={DESCRIPTION_INPUT_SETTINGS.placeholder}
              placeholderTextColor={COLORS.white}
              style={styles.descriptionInput}
              value={value}
            />
          )}
        />
        <CustomButton
          onPress={handleSubmit(handleAddCourse)}
          style={styles.addSectionButton}
          title={ADD_BUTTON_TITLE}
        />
      </View>
    </BottomSheet>
  );
};
