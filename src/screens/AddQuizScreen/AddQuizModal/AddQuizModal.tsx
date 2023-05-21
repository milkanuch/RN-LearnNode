import { useMemo, useState, useRef, FC } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

import BottomSheet from '@gorhom/bottom-sheet';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInput';

import { COLORS } from 'constants/colors/colors';

import { addQuiz } from 'store/addQuizSlice/addQuizSlice';
import { useAppDispatch } from 'store/index';

import { AddQuizAnswerItem } from './AddQuizAnswerItem/AddQuizAnswerItem';
import { addQuizScheme } from './addQuizModal.scheme';

import {
  ADD_QUIZ_BUTTON_TITLE,
  ANSWER_INPUT_SETTINGS,
  FORM_MODE,
  QUESTION_INPUT_SETTINGS,
  SNAP_POINTS,
} from './addQuizModal.settings';
import { styles } from './addQuizModal.styles';
import { AddQuizModalProps, QuizForm } from './addQuizModal.types';

const keyExtractor = (item: string) => item + Math.random();

export const AddQuizModal: FC<AddQuizModalProps> = ({
  onClose: handleClose,
}) => {
  const [answers, setAnswers] = useState<string[] | undefined>(undefined);
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const bottomSheetRef = useRef<BottomSheet>(null);
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<QuizForm>({
    mode: FORM_MODE,
    resolver: yupResolver(addQuizScheme),
  });
  const snapPoints = useMemo(() => SNAP_POINTS, []);
  const dispatch = useAppDispatch();

  const handleAnswerEndEditing = () => {
    const { answer } = getValues();

    setAnswers(prev => (prev ? [...prev, answer] : [answer]));
    setValue(ANSWER_INPUT_SETTINGS.name, '');
  };

  const handleDeleteAnswer = (answer: string) => {
    setAnswers(prev => prev?.filter(item => item !== answer));
  };

  const handleSelectAnswer = (answer: string) => {
    setCorrectAnswer(answer);
  };

  const renderItem: ListRenderItem<string> = ({ item }) => (
    <AddQuizAnswerItem
      answer={item}
      correctAnswer={correctAnswer}
      onDelete={handleDeleteAnswer}
      onSelect={handleSelectAnswer}
    />
  );

  const handleCompleteAddQuiz = () => {
    const { question } = getValues();

    if (!answers || !question || !correctAnswer) return;

    dispatch(
      addQuiz({
        question,
        correctAnswer,
        answers,
      }),
    );
    handleClose();
  };

  return (
    <GestureHandlerRootView style={styles.screen}>
      <BottomSheet
        backgroundStyle={styles.modalBackground}
        enablePanDownToClose={true}
        onClose={handleClose}
        ref={bottomSheetRef}
        snapPoints={snapPoints}>
        <View style={styles.container}>
          <Controller
            control={control}
            name={QUESTION_INPUT_SETTINGS.name}
            render={({
              field: {
                onChange: handleQuestionInput,
                onBlur: handleQuestionBlur,
                value,
              },
            }) => (
              <CustomTextInput
                error={errors.question?.message}
                label={QUESTION_INPUT_SETTINGS.label}
                onBlur={handleQuestionBlur}
                onChangeText={handleQuestionInput}
                placeholder={QUESTION_INPUT_SETTINGS.placeholder}
                placeholderTextColor={COLORS.white}
                style={styles.question}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name={ANSWER_INPUT_SETTINGS.name}
            render={({
              field: {
                onChange: handleAnswerInput,
                onBlur: handleAnswerBlur,
                value,
              },
            }) => (
              <CustomTextInput
                contentContainerStyle={styles.inputContainer}
                error={!answers ? errors.answer?.message : undefined}
                label={ANSWER_INPUT_SETTINGS.label}
                onBlur={handleAnswerBlur}
                onChangeText={handleAnswerInput}
                onEndEditing={handleAnswerEndEditing}
                placeholder={ANSWER_INPUT_SETTINGS.placeholder}
                placeholderTextColor={COLORS.white}
                style={styles.question}
                value={value}
              />
            )}
          />
          <FlatList
            data={answers}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            style={styles.answersList}
          />
          <CustomButton
            onPress={handleCompleteAddQuiz}
            style={styles.addQuizButton}
            title={ADD_QUIZ_BUTTON_TITLE}
          />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};
