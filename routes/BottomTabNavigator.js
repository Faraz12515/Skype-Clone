import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chats, Calls, Contacts} from '../screens';

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="chats" component={Chats} />
      <Tab.Screen name="calls" component={Calls} />
      <Tab.Screen name="contactss" component={Contacts} />
    </Tab.Navigator>
  );
}
