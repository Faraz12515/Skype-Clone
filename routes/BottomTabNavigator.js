import React, {useEffect} from 'react';
import {BackHandler, Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chats, Calls, Contacts} from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
    <Tab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        // activeTintColor: '#e91e63',
        activeTintColor: '#0178D4',
      }}
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;

      //     if (route.name === 'Chats') {
      //       iconName = focused ? 'chat' : 'chat-outline';
      //     } else if (route.name === 'Calls') {
      //       iconName = focused ? 'phone' : 'phone-outline';
      //     } else if (route.name === 'Contacts') {
      //       iconName = focused ? 'contacts' : 'contacts-outline';
      //     }

      //     // You can return any component that you like here!
      //     return (
      //       <MaterialCommunityIcons name={iconName} size={size} color={color} />
      //     );
      //   },
      // })}
      // tabBarOptions={{
      //   activeTintColor: 'dodgerblue',
      //   inactiveTintColor: 'gray',
      // }}
    >
      <Tab.Screen
        name="chats"
        component={Chats}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="calls"
        component={Calls}
        options={{
          tabBarLabel: 'Calls',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="phone" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="contacts"
        component={Contacts}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="contacts" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
