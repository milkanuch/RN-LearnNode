import { useState } from 'react';
import { View, Text, ListRenderItem, FlatList } from 'react-native';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';

import { QuizAnswerItem } from './QuizAnswerItem/QuizAnswerItem';

import { CONTINUE_BUTTON_TITLE } from './quizScreen.settings';
import { styles } from './quizScreen.styles';

const keyExtractor = (item: string) => item;

export const QuizScreen = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const answers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const handleContinuePress = () => {
    //TODO: Add logic
  };

  const handleAnswerPress = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const renderItem: ListRenderItem<string> = ({ item }) => (
    <QuizAnswerItem
      activeAnswer={selectedAnswer}
      answer={item}
      onPress={handleAnswerPress}
    />
  );

  const ListHeaderComponent = (
    <Text style={styles.questionTitle}>How to make routes in express?</Text>
  );

  const isButtonDisabled = !selectedAnswer;

  return (
    <View style={styles.screen}>
      <View style={styles.progressContainer}>
        <ProgressBar
          currentProgress={1}
          progressBarContainerStyle={styles.progressBarContainer}
          progressEndpoint={5}
        />
        <Text style={styles.progressDescription}>{`1/5`}</Text>
      </View>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={answers}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.answersList}
      />
      <CustomButton
        disabled={isButtonDisabled}
        onPress={handleContinuePress}
        style={styles.continueButton}
        title={CONTINUE_BUTTON_TITLE}
      />
    </View>
  );
};
