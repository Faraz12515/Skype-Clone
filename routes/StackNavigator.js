import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens //
import {
  SplashScreen,
  WelcomeScreen,
  GetStarted,
  SignIn,
  Password,
  HomeScreen,
} from '../screens';

import BottomTab from './BottomTabNavigator';

export default function StackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none">
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}
