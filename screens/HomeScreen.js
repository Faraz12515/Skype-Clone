import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as Icons from '../components/icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#000'}}>Home</Text>
      <Icons.SimpleLineIcons name="bell" size={30} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
