import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {All, MyContacts} from '../screens';

export default function MaterialTopTabNavigator() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="MyContacts" component={MyContacts} />
      <Tab.Screen name="All" component={All} />
    </Tab.Navigator>
  );
}
