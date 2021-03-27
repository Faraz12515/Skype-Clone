import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {
  Pic,
  Fonts,
  FontColor,
  ScreenSize,
  ScreenWidth,
  FontSize,
} from '../components/theme';

export default function GetStarted({navigation}) {
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
    BackHandler.exitApp();
    return true;
  };

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
        <Text style={styles.welcomeText}>Let's get started</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={styles.button}>
          <Text style={styles.buttonText}>Sign in or create</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textStyleView}>
        <Text style={styles.textStyle}>
          Use your Skype or Microsoft account. Need help?
        </Text>
      </View>
      {/**
       * Term of use
       */}
      {/* <View>
        <View style={{alignSelf: 'center', marginTop: '15%'}}>
          <Image
            style={{
              width: ScreenWidth.wp5,
              height: ScreenSize.hp13,
              resizeMode: 'contain',
            }}
            source={require('../assets/microsoft-logo.png')}
          />
          <View>
            <Text style={{fontSize: FontSize.font16, color: '#333'}}>
              Skype cannot be used for emergency calling.
            </Text>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={{fontSize: FontSize.font16, color: '#333'}}>
                Term of use
              </Text>
              <Text
                style={{
                  fontSize: FontSize.font16,
                  color: '#333',
                  marginHorizontal: '8%',
                }}>
                Privacy and cookies
              </Text>
            </View>
          </View>
        </View>
      </View>
     */}
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
  textStyleView: {
    width: ScreenWidth.wp7,
    marginTop: '7%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: FontSize.font17,
    textAlign: 'center',
  },
  button: {
    marginTop: '20%',
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
