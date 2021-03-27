import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {
  Pic,
  Fonts,
  FontColor,
  ScreenSize,
  ScreenWidth,
  FontSize,
} from '../components/theme';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.ImageView}>
        <Image
          style={{
            width: ScreenWidth.wp10,
            height: ScreenSize.hp15,
            resizeMode: 'contain',
          }}
          source={require('../assets/new.png')}
        />
      </View>
      <View style={styles.welcomeTextView}>
        <Text style={styles.welcomeText}>Welcome to Skype</Text>
      </View>
      <View style={styles.textStyleView}>
        <Text style={styles.textStyle}>
          Free HD video and voice calls anywhere in the world.
        </Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('GetStarted')}>
          <Text style={styles.buttonText}>Let's go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ImageView: {
    // backgroundColor: 'red',
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTextView: {
    // backgroundColor: 'red',
    marginTop: '18%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: FontSize.font5,
  },
  textStyle: {
    fontSize: FontSize.font27,
    textAlign: 'center',
  },
  textStyleView: {
    width: ScreenWidth.wp7,
    marginTop: '8%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    marginTop: '35%',
    alignSelf: 'center',
    backgroundColor: '#1686D8',
    padding: 11,
    borderRadius: 50,
    width: '60%',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: FontSize.font25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
