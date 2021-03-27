import React, {useEffect} from 'react';
import {BackHandler, Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chats, Calls, Contacts} from '../screens';

export default function BottomTabNavigator() {
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log(isFocused);
    if (isFocused) {
      BackHandler.addEventListener('hardwareBackPress', backAction);
    }

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [isFocused]);

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to Exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="chats" component={Chats} />
      <Tab.Screen name="calls" component={Calls} />
      <Tab.Screen name="contactss" component={Contacts} />
    </Tab.Navigator>
  );
}
