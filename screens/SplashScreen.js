import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, ActivityIndicator} from 'react-native';
import {
  Pic,
  Fonts,
  FontColor,
  ScreenSize,
  ScreenWidth,
  FontSize,
} from '../components/theme';

export default function SplashScreen({navigation}) {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);

    navigation.navigate('WelcomeScreen');
  }, 2000);

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
      <View style={styles.loader}>
        {isLoading == true && (
          <ActivityIndicator size="small" color="#1686D8" />
        )}
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
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    // backgroundColor: 'red',
    marginTop: '18%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
