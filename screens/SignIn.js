import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SignIn({navigation}) {
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
            width: ScreenWidth.wp11,
            height: ScreenSize.hp11,
            resizeMode: 'contain',
          }}
          source={require('../assets/new.png')}
        />
      </View>
      <View style={styles.MSImageView}>
        <Image
          style={{
            width: ScreenWidth.wp5,
            height: ScreenSize.hp13,
            resizeMode: 'contain',
          }}
          source={require('../assets/microsoft-logo.png')}
        />
      </View>
      <View style={styles.welcomeTextView}>
        <Text style={styles.welcomeText}>Sign in</Text>
      </View>
      <View style={styles.textStyleView}>
        <Text style={styles.textStyle}>to continue to Skype</Text>
      </View>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Skype, phone or email"
          placeholderTextColor="#999"
          //   onChangeText={(text) => setUserName(text)}
          //   value={userName}
        />
      </View>
      <View style={{...styles.textStyleView, marginTop: '1%'}}>
        <Text style={styles.textStyle}>
          No account? <Text style={{color: '#1686D8'}}>Create one!</Text>
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <View style={{marginHorizontal: '4%'}}>
          <TouchableOpacity
            onPress={backAction}
            style={{...styles.button, backgroundColor: '#ccc'}}>
            <Text style={{...styles.buttonText, color: '#000'}}>Back</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Password')}
            style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/**
       * Sign-in option
       */}
      <View style={styles.signinButtonView}>
        <TouchableOpacity style={styles.signinButton}>
          <View
            style={{
              marginHorizontal: '6%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Text style={{marginRight: '5%'}}>
              <MaterialCommunityIcons
                name="key-variant"
                color="#3b3b3b"
                size={23}
              />
            </Text>
            <Text style={styles.signinButtonText}>Sign-in options</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**
       * Term of use
       */}
      {/* <View
        style={{
          flexDirection: 'row',
          width: '85%',
          alignSelf: 'center',
          marginTop: '22%',
        }}>
        <Text style={{...styles.termofuse, marginRight: '3%'}}>
          Term of use
        </Text>
        <Text style={{...styles.termofuse, marginHorizontal: '4%'}}>
          Privacy and cookies
        </Text>
        <Text style={{...styles.termofuse, marginHorizontal: '4%'}}>...</Text>
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
    marginTop: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MSImageView: {marginHorizontal: '-6%'},
  welcomeTextView: {},
  welcomeText: {
    fontSize: FontSize.font4,
    fontWeight: 'bold',
    alignSelf: 'center',
    width: '85%',
  },
  textStyleView: {
    // width: ScreenWidth.wp7,
  },
  textStyle: {
    fontSize: FontSize.font21,
    color: '#222',
    alignSelf: 'center',
    width: '85%',
  },
  textInputView: {
    alignSelf: 'center',
    width: '85%',
  },
  textInput: {
    marginVertical: '5%',
    // paddingVertical: '1%',
    color: '#222',

    fontSize: 16,
    // paddingTop: 5,
    // borderBottomColor: '#1686D8',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '12%',
    width: '91%',
  },
  button: {
    // marginTop: '12%',
    alignSelf: 'center',
    backgroundColor: '#1686D8',
    padding: '8%',
    // borderRadius: 50,
    width: '110%',
    // elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: FontSize.font25,
    textAlign: 'center',
    // fontWeight: 'bold',
  },
  signinButtonView: {
    marginTop: '15%',
    // width: '80%',
  },
  signinButton: {
    // marginTop: '12%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#A6A6A6',
    padding: '3.5%',
    // borderRadius: 50,
    width: '85%',
    // elevation: 5,
  },
  signinButtonText: {
    color: '#222',
    fontSize: FontSize.font23,
    textAlign: 'center',
    // fontWeight: 'bold',
  },
  termofuse: {
    fontSize: FontSize.font2,
    color: '#333',
  },
});
