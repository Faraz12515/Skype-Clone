import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Pic,
  Fonts,
  FontColor,
  ScreenSize,
  ScreenWidth,
  FontSize,
} from '../components/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Password({navigation}) {
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
      <View style={styles.textStyleView}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <View
            style={{
              ...styles.textStyle,
              color: '#222',
              flexDirection: 'row',
            }}>
            <MaterialIcons name="arrow-back" color="#222" size={20} />
            <Text
              style={{
                ...styles.textStyle,
                color: '#222',
                fontSize: FontSize.font22,
              }}>
              +92 3152174051
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.welcomeTextView}>
        <Text style={styles.welcomeText}>Enter password</Text>
      </View>

      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#999"
          //   onChangeText={(text) => setUserName(text)}
          //   value={userName}
        />
      </View>
      <View style={{...styles.textStyleView, marginTop: '1%'}}>
        <Text style={styles.textStyle}>Forgot password?</Text>
      </View>
      <View style={{...styles.textStyleView, marginTop: '1%'}}>
        <Text style={{...styles.textStyle, marginTop: '4%'}}>
          This isn't my number
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BottomTab')}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/**
       * Term of use
       */}
      {/* <View style={styles.termofuseView}>
        <Text style={{...styles.termofuse, marginRight: '3%'}}>
          Term of use
        </Text>
        <Text style={{...styles.termofuse, marginHorizontal: '4%'}}>
          Privacy and cookies
        </Text>
        <Text style={{...styles.termofuse, marginHorizontal: '4%'}}>...</Text>
      </View> */}
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
  textStyleView: {marginBottom: '2%'},
  textStyle: {
    fontSize: FontSize.font21,
    color: '#1686D8',
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
    width: '89%',
  },
  button: {
    // marginTop: '12%',
    alignSelf: 'center',
    backgroundColor: '#1686D8',
    padding: '8%',
    // borderRadius: 50,
    width: '130%',
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
  termofuseView: {
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    marginTop: '34%',
  },
  termofuse: {
    fontSize: FontSize.font2,
    color: '#333',
  },
});
