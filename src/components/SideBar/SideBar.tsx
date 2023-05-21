import { FC } from 'react';
import { Text, View } from 'react-native';

import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomButton } from 'components/CustomButton/CustomButton';
import { IconSize } from 'components/CustomButton/customButton.types';

import { useAppDispatch, useAppSelector } from 'store/index';
import { selectUserNickname, setIsUserLogged } from 'store/userSlice/userSlice';
import { deleteUserToken } from 'store/userTokensSlice/userTokensSlice';

import {
  HOME_BUTTON_ICON,
  HOME_BUTTON_TITLE,
  LOG_OUT_BUTTON_ICON,
  LOG_OUT_BUTTON_TITLE,
} from './sideBar.settings';
import { styles } from './sideBar.styles';
import { EDGES } from 'navigation/AuthStackNavigation/authStackNavigation.settings';
import { DrawerNavigationTypes } from 'navigation/DrawerNavigation/drawerNavigation.types';

export const SideBar: FC<DrawerContentComponentProps> = ({ navigation }) => {
  const nickname = useAppSelector(selectUserNickname);
  const dispatch = useAppDispatch();

  const handleHomePress = () => {
    navigation.navigate(DrawerNavigationTypes.HomeStack);
    navigation.closeDrawer();
  };

  const handleLogOutPress = () => {
    dispatch(deleteUserToken());
    dispatch(setIsUserLogged(false));
  };

  return (
    <SafeAreaView edges={EDGES} style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.screenContainer}
        style={styles.screen}>
        <View>
          <Text style={styles.title}>{`Hello, ${nickname}`}</Text>
          <CustomButton
            icon={HOME_BUTTON_ICON}
            iconSize={IconSize.Large}
            onPress={handleHomePress}
            title={HOME_BUTTON_TITLE}
          />
        </View>
        <CustomButton
          icon={LOG_OUT_BUTTON_ICON}
          iconSize={IconSize.Large}
          onPress={handleLogOutPress}
          title={LOG_OUT_BUTTON_TITLE}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
