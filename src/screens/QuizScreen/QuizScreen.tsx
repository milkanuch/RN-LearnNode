import { View, Text, ListRenderItem, FlatList } from 'react-native';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';

import { QuizAnswerItem } from './QuizAnswerItem/QuizAnswerItem';

import { styles } from './quizScreen.styles';

const renderItem: ListRenderItem<string> = () => <QuizAnswerItem />;
const keyExtractor = (item: string) => item;

export const QuizScreen = () => {
  const answers = ['1', '2', '3'];

  const handleContinuePress = () => {
    //TODO: Add logic
  };

  const ListHeaderComponent = (
    <Text style={styles.questionTitle}>How to make routes in express?</Text>
  );

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
        style={styles.answersList}
      />
      <CustomButton
        onPress={handleContinuePress}
        style={styles.continueButton}
        title="Next"
      />
    </View>
  );
};
